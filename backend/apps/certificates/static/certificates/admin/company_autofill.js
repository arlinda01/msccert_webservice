(function () {
  'use strict';

  // Single "Company name" field. Existing company names are offered as
  // suggestions (datalist). When the typed/picked name matches a known
  // company, its address and scope of activity from the most recent
  // certificate appear as light placeholders; press Tab in an empty field
  // to accept one, or just type over it. Nothing is written into a field
  // without that keypress. standard and iaf_code are deliberately left out:
  // those tend to change between certificates for the same company.
  var SUGGEST_FIELDS = {
    address: 'id_address',
    scope_activity: 'id_scope_activity'
  };

  // fieldId -> pending suggested value.
  var suggestions = {};
  var lastLookup = '';

  function clearSuggestions() {
    Object.keys(SUGGEST_FIELDS).forEach(function (key) {
      var id = SUGGEST_FIELDS[key];
      var input = document.getElementById(id);
      if (input && suggestions[id]) input.placeholder = '';
      delete suggestions[id];
    });
  }

  function suggestIfEmpty(fieldId, value) {
    var input = document.getElementById(fieldId);
    if (!input || input.value || !value) return;
    suggestions[fieldId] = value;
    input.placeholder = value;
  }

  function lookup(nameInput) {
    var name = nameInput.value.trim();
    if (name === lastLookup) return;
    lastLookup = name;
    clearSuggestions();
    if (!name) return;

    var url = nameInput.getAttribute('data-autofill-url') +
      '?name=' + encodeURIComponent(name);
    fetch(url, { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || nameInput.value.trim() !== name) return;
        Object.keys(SUGGEST_FIELDS).forEach(function (key) {
          suggestIfEmpty(SUGGEST_FIELDS[key], data[key]);
        });
      })
      .catch(function () { /* leave the form exactly as it is */ });
  }

  function onTab(event) {
    if (event.key !== 'Tab') return;
    var input = event.target;
    var suggestion = suggestions[input.id];
    if (input.value || !suggestion) return;
    input.value = suggestion;
    input.placeholder = '';
    delete suggestions[input.id];
  }

  function init() {
    var nameInput = document.getElementById('id_company_name');
    if (!nameInput) return;

    var datalist = document.createElement('datalist');
    datalist.id = 'company-names-list';
    nameInput.parentNode.appendChild(datalist);

    fetch(nameInput.getAttribute('data-names-url'), { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        ((data && data.names) || []).forEach(function (n) {
          var option = document.createElement('option');
          option.value = n;
          datalist.appendChild(option);
        });
      })
      .catch(function () {});

    ['input', 'change', 'blur'].forEach(function (evt) {
      nameInput.addEventListener(evt, function () { lookup(nameInput); });
    });

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
