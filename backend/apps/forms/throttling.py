from rest_framework.throttling import AnonRateThrottle


class ContactFormRateThrottle(AnonRateThrottle):
    scope = 'contact_form'


class QuoteFormRateThrottle(AnonRateThrottle):
    scope = 'quote_form'


class ApplyOnlineRateThrottle(AnonRateThrottle):
    scope = 'apply_online_form'
