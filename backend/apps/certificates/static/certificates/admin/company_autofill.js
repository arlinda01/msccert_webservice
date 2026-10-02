(function () {
  'use strict';

  // Fields a company's previous certificates keep in common. Shown as a
  // light placeholder suggestion rather than written straight into the
  // field, so picking a company never silently overwrites what's about to
  // be typed -- press Tab on an empty field to accept its suggestion, or
  // just type over it to ignore it. standard and iaf_code are deliberately
  // left out: those are exactly what tends to change between one
  // certificate and the next for the same company.
  var SUGGEST_FIELDS = {
    company_name: 'id_company_name',
    address: 'id_address',
    scope_activity: 'id_scope_activity'
  };

  // fieldId -> suggested value, cleared once accepted (or once the field
  // already has a value so there's nothing left to accept).
  var suggestions = {};

  function suggestIfEmpty(fieldId, value) {
    var input = document.getElementById(fieldId);
    if (!input || input.value || !value) return;
    suggestions[fieldId] = value;
    input.placeholder = value;
  }

  function onCompanyChange(select) {
    var companyId = select.value;
    var urlTemplate = select.getAttribute('data-autofill-url');
    if (!companyId || !urlTemplate) return;

    var url = urlTemplate.replace(/0\/$/, companyId + '/');

    fetch(url, { credentials: 'same-origin' })
      .then(function (response) { return response.ok ? response.json() : null; })
      .then(function (data) {
        if (!data) return;
        Object.keys(SUGGEST_FIELDS).forEach(function (key) {
          suggestIfEmpty(SUGGEST_FIELDS[key], data[key]);
        });
      })
      .catch(function () {
        // No prior certificate for this company yet, or request failed --
        // leave the form exactly as it is.
      });
  }

  // Accepts the field's own pending suggestion when Tab is pressed while
  // it's focused (either direction -- Tab or Shift+Tab), then lets the
  // browser move focus as it normally would.
  function onTab(event) {
    if (event.key !== 'Tab') return;
    var input = event.target;
    var suggestion = suggestions[input.id];
    if (!input || input.value || !suggestion) return;
    input.value = suggestion;
    delete suggestions[input.id];
  }

  function init() {
    var select = document.getElementById('id_company');
    if (select) {
      // Native <select> change also fires when select2 (autocomplete_fields)
      // changes the underlying value, so this covers both.
      select.addEventListener('change', function () {
        onCompanyChange(select);
      });
    }

    Object.keys(SUGGEST_FIELDS).forEach(function (key) {
      var input = document.getElementById(SUGGEST_FIELDS[key]);
      if (input) input.addEventListener('keydown', onTab);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
