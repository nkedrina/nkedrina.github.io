(function () {
    'use strict';

    var $ = function (s, r) { return (r || document).querySelector(s); };
    var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
    var sortedEx = function () { return window.PORTFOLIO_DATA.EXH.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }); };
    var pad2 = function (n) { return n < 10 ? '0' + n : '' + n; };
    var place = function (e) { return [e.city, e.country].filter(Boolean).join(', '); };
    var cityLine = function () { return window.PORTFOLIO_DATA.A.cities.map(esc).join(' — '); };
    var TAG = function (t) { return esc(t) + ' <i class="dot" aria-hidden="true"></i> @nkedrina'; };

    window.PORTFOLIO_UTILS = {
        $: $, RM: RM, esc: esc, sortedEx: sortedEx, pad2: pad2, place: place, cityLine: cityLine, TAG: TAG
    };
})();
