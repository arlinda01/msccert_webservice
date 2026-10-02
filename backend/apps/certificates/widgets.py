import datetime

from django.forms import SelectDateWidget

# Certificates can be back-dated years into the past, and an expiry date can
# be set up to ~4 years after the issue date, so the year dropdown needs
# enough headroom in both directions to reach any of that directly instead
# of paging through a calendar month by month.
YEARS_BACK = 20
YEARS_FORWARD = 6


class YearMonthDayDateWidget(SelectDateWidget):
    """
    Month / Day / Year dropdowns for admin date fields. Month/day/year order
    is derived by Django from the LANGUAGE_CODE's DATE_FORMAT ('en-us' ->
    month, day, year), and month names are written out in full.
    """

    def __init__(self, attrs=None, years=None, months=None, empty_label=None):
        if years is None:
            current_year = datetime.date.today().year
            years = range(current_year - YEARS_BACK, current_year + YEARS_FORWARD + 1)
        if empty_label is None:
            empty_label = ('Year', 'Month', 'Day')
        super().__init__(attrs=attrs, years=years, months=months, empty_label=empty_label)

    def get_context(self, name, value, attrs):
        # Django drops the blank Year/Month/Day option when the field is
        # required, so an empty date silently showed as the first choice
        # (January 1 of the oldest year). Always keep the blank option; the
        # form field still enforces "required" on submit.
        self.is_required = False
        return super().get_context(name, value, attrs)
