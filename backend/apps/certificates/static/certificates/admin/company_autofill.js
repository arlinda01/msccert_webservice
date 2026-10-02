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

  function initCertificateNumber() {
    var input = document.getElementById('id_certificate_number');
    if (!input) return;
    var suggestion = input.getAttribute('data-suggestion');
    if (suggestion && !input.value) suggestions[input.id] = suggestion;
    input.addEventListener('keydown', onTab);
  }

  // On the add form, keep expiry at issue date + 3 years - 1 day until the
  // user sets the expiry themselves. (Existing certificates are never
  // recalculated.)
  function initExpiryFollowsIssue() {
    if (!/\/add\/?$/.test(window.location.pathname)) return;
    var parts = ['year', 'month', 'day'];
    var issue = {}, expiry = {};
    for (var i = 0; i < parts.length; i++) {
      issue[parts[i]] = document.getElementById('id_first_issue_date_' + parts[i]);
      expiry[parts[i]] = document.getElementById('id_expiry_date_' + parts[i]);
      if (!issue[parts[i]] || !expiry[parts[i]]) return;
    }
    var touched = false;
    parts.forEach(function (p) {
      expiry[p].addEventListener('change', function () { touched = true; });
    });

    function recompute() {
      if (touched) return;
      var y = parseInt(issue.year.value, 10);
      var m = parseInt(issue.month.value, 10);
      var d = parseInt(issue.day.value, 10);
      if (!y || !m || !d) return;
      // Date() rolls 29 Feb into 1 Mar, minus a day gives 28 Feb -- same
      // rule as the server.
      var end = new Date(y + 3, m - 1, d - 1);
      expiry.year.value = String(end.getFullYear());
      expiry.month.value = String(end.getMonth() + 1);
      expiry.day.value = String(end.getDate());
    }
    parts.forEach(function (p) {
      issue[p].addEventListener('change', recompute);
    });
  }

  function init() {
    initCertificateNumber();
    initExpiryFollowsIssue();
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
