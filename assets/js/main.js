(function($) {
'use strict';

/**
 * Open all external links that do not specify a target in a new window.
 */
(function() {
  var host;
  host = location.host;

  $('a[href]:not([target])').each(function() {
    var href,
        link;

    link = $(this);

    href = {
      orig: link.attr('href'),
      host: false
    };

    // Check for http and https links
    if (href.orig.slice(0, 7) == 'http://') {
      href.host = href.orig.slice(7);
    }
    else if (href.orig.slice(0, 8) == 'https://') {
      href.host = href.orig.slice(8);
    }

    // Ignore local links:
    //  * Links that do not begin with http(s)://
    //  * Links whose host are the same as the JS location's host
    if (!href.host || host == href.host.slice(0, host.length)) {
      return;
    }

    // Open the link in a new window
    link.attr('target', '_blank');
  });
}());

})(jQuery);
