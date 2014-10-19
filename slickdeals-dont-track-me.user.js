// ==UserScript==
// @name       Slickdeals Don't Track Me!
// @version    1.1
// @description  Replaces outgoing Slickdeals tracking links with direct links.
// @match      http://slickdeals.net/f/*
// @namespace https://github.com/gg/slickdeals-dont-track-me
// @author    Gregg Gajic <https://github.com/gg>
// @license    MIT
// ==/UserScript==

(function() {
  var getQueryStringParams = function (url) {
    // See: http://stackoverflow.com/a/3855394
    return (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=', 2);
            if (p.length == 1)
                b[p[0]] = "";
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })((url.split('?')[1] || '').split('&'));
  };

  var contentBody = document.getElementById('maincontent') || document.getElementById('posts');
  var aElements = contentBody.getElementsByTagName('a');
  for (var i = 0, a; a = aElements[i]; i++) {
    var queryParams = getQueryStringParams(a.href);
    var directUrl = queryParams['u2'];
    if (directUrl) {
      a.href = directUrl;
      a.onclick = '';
    };
  }
})();
