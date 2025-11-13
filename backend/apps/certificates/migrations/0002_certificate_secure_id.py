# Generated migration for secure_id field with proper UUID generation

import uuid
from django.db import migrations, models


def generate_secure_ids(apps, schema_editor):
    """
    Generate unique UUIDs for existing certificates
    """
    Certificate = apps.get_model('certificates', 'Certificate')
    for certificate in Certificate.objects.all():
        certificate.secure_id = uuid.uuid4()
        certificate.save()


class Migration(migrations.Migration):

    dependencies = [
        ('certificates', '0001_initial'),
    ]

    operations = [
        # Step 1: Add field without unique constraint
        migrations.AddField(
            model_name='certificate',
            name='secure_id',
            field=models.UUIDField(
                default=uuid.uuid4,
                editable=False,
                help_text='Secure UUID for public certificate verification (non-guessable)',
                null=True  # Temporarily allow null
            ),
        ),
        # Step 2: Populate UUIDs for existing records
        migrations.RunPython(generate_secure_ids, reverse_code=migrations.RunPython.noop),
        # Step 3: Make field non-null and unique
        migrations.AlterField(
            model_name='certificate',
            name='secure_id',
            field=models.UUIDField(
                default=uuid.uuid4,
                unique=True,
                editable=False,
                help_text='Secure UUID for public certificate verification (non-guessable)'
            ),
        ),
    ]