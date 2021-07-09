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
    link.addClass("external");
  });

})();

(function() {

    // Show the "Top of page" button in the sidebar if user has scrolled down
  $(window).bind("scroll", function() {
    $("#btn-top").toggle(window.scrollY > 0);
  })

}());

})(jQuery);

function copyToClipboard() {

  // Create a "hidden" textarea and append it to the body
  // -- Note: must use textarea.  Input boxes do not preserve line breaks
  let $temp = $("<textarea>");
  $("body").append($temp);

  // Copy the text from the nearby code block
  // -- $(this) is the copy button
  $temp
    .val( $(this).parent().parent().find("pre").text() )
    .select();

  // Copy the highlighted text
  document.execCommand("copy");

  $temp.remove();
}
