"""
Management command to fix Albanian characters in blog posts.
Replaces common words that are missing ë and ç with correct versions.
Run with: python manage.py fix_albanian_characters
"""
from django.core.management.base import BaseCommand
from apps.blog.models import BlogCategory, BlogPost
import re


# Albanian word replacements - words that should have ë or ç
ALBANIAN_REPLACEMENTS = [
    # Common words with ë
    (r'\beshte\b', 'është'),
    (r'\bEshte\b', 'Është'),
    (r'\bnje\b', 'një'),
    (r'\bNje\b', 'Një'),
    (r'\bcfare\b', 'çfarë'),
    (r'\bCfare\b', 'Çfarë'),
    (r'\bte\b', 'të'),  # Note: context-dependent, may need manual review
    (r'\bTe\b', 'Të'),
    (r'\bqe\b', 'që'),
    (r'\bQe\b', 'Që'),
    (r'\bper\b', 'për'),
    (r'\bPer\b', 'Për'),
    (r'\bme\b', 'më'),  # Note: context-dependent
    (r'\bkete\b', 'këtë'),
    (r'\bKete\b', 'Këtë'),
    (r'\bnese\b', 'nëse'),
    (r'\bNese\b', 'Nëse'),
    (r'\bhere\b', 'herë'),
    (r'\bHere\b', 'Herë'),
    (r'\bmire\b', 'mirë'),
    (r'\bMire\b', 'Mirë'),
    (r'\bvete\b', 'vetë'),
    (r'\bVete\b', 'Vetë'),
    (r'\bvetem\b', 'vetëm'),
    (r'\bVetem\b', 'Vetëm'),
    (r'\bpese\b', 'pesë'),
    (r'\bPese\b', 'Pesë'),
    (r'\bdhjete\b', 'dhjetë'),
    (r'\bDhjete\b', 'Dhjetë'),
    (r'\bgjate\b', 'gjatë'),
    (r'\bGjate\b', 'Gjatë'),

    # Words with ë in middle/end
    (r'cilesise', 'cilësisë'),
    (r'Cilesise', 'Cilësisë'),
    (r'cilesine', 'cilësinë'),
    (r'Cilesine', 'Cilësinë'),
    (r'cilesi', 'cilësi'),
    (r'Cilesi', 'Cilësi'),
    (r'menaxhimit', 'menaxhimit'),  # already correct
    (r'nderkombetar', 'ndërkombëtar'),
    (r'Nderkombetar', 'Ndërkombëtar'),
    (r'nderkombetare', 'ndërkombëtare'),
    (r'Nderkombetare', 'Ndërkombëtare'),
    (r'perputhshmeri', 'përputhshmëri'),
    (r'Perputhshmeri', 'Përputhshmëri'),
    (r'perputhshmerise', 'përputhshmërisë'),
    (r'perputhshmerine', 'përputhshmërinë'),
    (r'perpunimit', 'përpunimit'),
    (r'perpunim', 'përpunim'),
    (r'pershtatshme', 'përshtatshme'),
    (r'Pershtatshme', 'Përshtatshme'),
    (r'pershkrim', 'përshkrim'),
    (r'Pershkrim', 'Përshkrim'),
    (r'permiresim', 'përmirësim'),
    (r'Permiresim', 'Përmirësim'),
    (r'permiresojne', 'përmirësojnë'),
    (r'permiresoni', 'përmirësoni'),
    (r'permbushur', 'përmbushur'),
    (r'Permbushur', 'Përmbushur'),
    (r'perqafojne', 'përqafojnë'),
    (r'perqafoni', 'përqafoni'),
    (r'pergadituni', 'përgadituni'),
    (r'Pergadituni', 'Përgadituni'),
    (r'pergjithshme', 'përgjithshme'),
    (r'Pergjithshme', 'Përgjithshme'),
    (r'pergjigje', 'përgjigje'),
    (r'Pergjigje', 'Përgjigje'),
    (r'perqendruar', 'përqendruar'),
    (r'Perqendruar', 'Përqendruar'),
    (r'perfshijne', 'përfshijnë'),
    (r'perfshire', 'përfshirë'),
    (r'perfaqesojne', 'përfaqësojnë'),
    (r'perfundim', 'përfundim'),
    (r'Perfundim', 'Përfundim'),

    # Words with ë
    (r'vlefshme', 'vlefshme'),  # already correct
    (r'themelore', 'themelore'),  # already correct
    (r'gjitheperfshirese', 'gjithëpërfshirëse'),
    (r'Gjitheperfshirese', 'Gjithëpërfshirëse'),
    (r'gjitheperfshires', 'gjithëpërfshirës'),
    (r'mbikeqyres', 'mbikëqyrës'),
    (r'ndjeshme', 'ndjeshme'),  # already correct
    (r'dhenave', 'dhënave'),
    (r'Dhenave', 'Dhënave'),
    (r'dhena', 'dhëna'),
    (r'Dhena', 'Dhëna'),
    (r'mbledhni', 'mbledhni'),  # already correct
    (r'kerkuara', 'kërkuara'),
    (r'kerkuar', 'kërkuar'),
    (r'kerkesat', 'kërkesat'),
    (r'kerkesa', 'kërkesa'),
    (r'kerkojne', 'kërkojnë'),
    (r'kerkoni', 'kërkoni'),
    (r'merrni', 'merrni'),  # already correct
    (r'bere', 'bërë'),
    (r'behet', 'bëhet'),
    (r'beni', 'bëni'),
    (r'vleresuar', 'vlerësuar'),
    (r'vleresim', 'vlerësim'),
    (r'vleresoni', 'vlerësoni'),
    (r'vleresojne', 'vlerësojnë'),
    (r'identifikoni', 'identifikoni'),  # already correct
    (r'pershtatet', 'përshtatet'),
    (r'nevojave', 'nevojave'),  # already correct
    (r'nevoje', 'nevojë'),
    (r'Nevoje\b', 'Nevojë'),
    (r'punonjesit', 'punonjësit'),
    (r'punonjes', 'punonjës'),
    (r'Punonjes', 'Punonjës'),
    (r'angazhimit', 'angazhimit'),  # already correct
    (r'qendrueshmeri', 'qëndrueshmëri'),
    (r'Qendrueshmeri', 'Qëndrueshmëri'),
    (r'qendrueshme', 'qëndrueshme'),
    (r'Qendrueshme', 'Qëndrueshme'),
    (r'rezistence', 'rezistencë'),
    (r'terren', 'terrën'),
    (r'mesatare', 'mesatare'),  # already correct
    (r'vjetore', 'vjetore'),  # already correct - but check vjetor
    (r'vjetor\b', 'vjetor'),  # context check
    (r'vjecare', 'vjeçare'),
    (r'vjecar\b', 'vjeçar'),
    (r'ligjore', 'ligjore'),  # already correct
    (r'teknologjike', 'teknologjike'),  # already correct
    (r'zevendesimi', 'zëvendësimi'),
    (r'zevendesim', 'zëvendësim'),
    (r'arritshme', 'arritshme'),  # already correct
    (r'zhvilluar', 'zhvilluar'),  # already correct
    (r'fitimin', 'fitimin'),  # already correct
    (r'zbuloni', 'zbuloni'),  # already correct
    (r'zbulojne', 'zbulojnë'),
    (r'udhetimi', 'udhëtimi'),
    (r'udhetim', 'udhëtim'),
    (r'rishikoni', 'rishikoni'),  # already correct
    (r'rishikimit', 'rishikimit'),  # already correct

    # Additional common words
    (r'kontrate', 'kontratë'),
    (r'Kontrate\b', 'Kontratë'),
    (r'mbeshtesin', 'mbështesin'),
    (r'mbeshtetje', 'mbështetje'),
    (r'sigurine', 'sigurinë'),
    (r'sigurise', 'sigurisë'),
    (r'ndryshme', 'ndryshme'),  # already correct
    (r'kornize', 'kornizë'),
    (r'Kornize\b', 'Kornizë'),
    (r'kornizes', 'kornizës'),
    (r'Kornizes', 'Kornizës'),
    (r'certifikate', 'certifikatë'),
    (r'Certifikate\b', 'Certifikatë'),
    (r'certifikaten', 'certifikatën'),
    (r'sigurojne', 'sigurojnë'),
    (r'siguroheni', 'siguroheni'),  # already correct
    (r'sistemet', 'sistemet'),  # already correct
    (r'organizaten', 'organizatën'),
    (r'organizata', 'organizata'),  # already correct
    (r'raportojne', 'raportojnë'),
    (r'produktivitetit', 'produktivitetit'),  # already correct
    (r'produktive', 'produktivë'),
    (r'kuptimplota', 'kuptimplotë'),
    (r'kuptimplot', 'kuptimplot'),  # already correct
    (r'informacionit', 'informacionit'),  # already correct
    (r'implementuar', 'implementuar'),  # already correct
    (r'dokumentuar', 'dokumentuar'),  # already correct

    # Words starting with ç
    (r'\bcdo\b', 'çdo'),
    (r'\bCdo\b', 'Çdo'),
    (r'cmimin', 'çmimin'),
    (r'cmim\b', 'çmim'),

    # Additional patterns
    (r'perpalleni', 'përballeni'),
    (r'perballoni', 'përballoni'),
    (r'perballuar', 'përballuar'),
    (r'perdorni', 'përdorni'),
    (r'Perdorni', 'Përdorni'),
    (r'perdorimi', 'përdorimi'),
    (r'plotesojne', 'plotësojnë'),
    (r'plotesoni', 'plotësoni'),
    (r'arritjen', 'arritjen'),  # already correct
    (r'arritje', 'arritje'),  # already correct
    (r'ndertuar', 'ndërtuar'),
    (r'ndertoni', 'ndërtoni'),
    (r'ndertimit', 'ndërtimit'),
    (r'gjithe', 'gjithë'),
    (r'Gjithe\b', 'Gjithë'),
    (r'gjithnje', 'gjithnjë'),
    (r'kushton', 'kushton'),  # already correct
    (r'koston', 'koston'),  # already correct
    (r'kostos', 'kostos'),  # already correct
    (r'kostove', 'kostove'),  # already correct
    (r'energjise', 'energjisë'),
    (r'energji', 'energji'),  # already correct
    (r'mbeturina', 'mbeturina'),  # already correct
    (r'mbeturinave', 'mbeturinave'),  # already correct
    (r'nxisin', 'nxisin'),  # already correct
    (r'menyre', 'mënyrë'),
    (r'menyren', 'mënyrën'),
    (r'detajuar', 'detajuar'),  # already correct
    (r'vendosura', 'vendosura'),  # already correct
]


def fix_albanian_text(text):
    """Apply all Albanian character fixes to a text string."""
    if not text:
        return text

    result = text
    for pattern, replacement in ALBANIAN_REPLACEMENTS:
        result = re.sub(pattern, replacement, result)

    return result


class Command(BaseCommand):
    help = 'Fixes Albanian characters (ë, ç) in blog posts and categories'

    def add_arguments(self, parser):
        parser.add_argument(
            '--dry-run',
            action='store_true',
            help='Show what would be changed without making changes',
        )

    def handle(self, *args, **options):
        dry_run = options['dry_run']

        if dry_run:
            self.stdout.write(self.style.WARNING('DRY RUN - No changes will be made'))

        self.stdout.write('Fixing Albanian characters in blog content...')

        # Fix categories
        categories_fixed = 0
        for cat in BlogCategory.objects.all():
            original_name = cat.name_sq
            fixed_name = fix_albanian_text(cat.name_sq)

            if original_name != fixed_name:
                if dry_run:
                    self.stdout.write(f'  Would fix category: "{original_name}" -> "{fixed_name}"')
                else:
                    cat.name_sq = fixed_name
                    cat.save()
                    self.stdout.write(f'  Fixed category: "{original_name}" -> "{fixed_name}"')
                categories_fixed += 1

        # Fix blog posts
        posts_fixed = 0
        for post in BlogPost.objects.all():
            changes = []

            # Fix title
            original_title = post.title_sq
            fixed_title = fix_albanian_text(post.title_sq)
            if original_title != fixed_title:
                changes.append(('title_sq', original_title, fixed_title))
                if not dry_run:
                    post.title_sq = fixed_title

            # Fix excerpt
            original_excerpt = post.excerpt_sq
            fixed_excerpt = fix_albanian_text(post.excerpt_sq)
            if original_excerpt != fixed_excerpt:
                changes.append(('excerpt_sq', original_excerpt[:50], fixed_excerpt[:50]))
                if not dry_run:
                    post.excerpt_sq = fixed_excerpt

            # Fix content
            original_content = post.content_sq
            fixed_content = fix_albanian_text(post.content_sq)
            if original_content != fixed_content:
                changes.append(('content_sq', 'content changed', 'content fixed'))
                if not dry_run:
                    post.content_sq = fixed_content

            if changes:
                if dry_run:
                    self.stdout.write(f'  Would fix post "{post.title}":')
                    for field, old, new in changes:
                        self.stdout.write(f'    {field}: changed')
                else:
                    post.save()
                    self.stdout.write(f'  Fixed post: {post.title}')
                posts_fixed += 1

        if dry_run:
            self.stdout.write(self.style.WARNING(
                f'\nDRY RUN: Would fix {categories_fixed} categories, {posts_fixed} posts'
            ))
        else:
            self.stdout.write(self.style.SUCCESS(
                f'\nSuccessfully fixed {categories_fixed} categories, {posts_fixed} posts'
            ))
