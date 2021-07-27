
updateExternalLinks();

(function() {

    // Show the "Top of page" button in the sidebar if user has scrolled down
  $(window).bind("scroll", function() {
    $("#btn-top").toggle(window.scrollY > 0);
  })

}());
