
init();

function init() {

  // Remove the Bootstrap "table-striped" class from the table
  setTimeout ( () => $("table").removeClass("table-striped"), 100);

  setBadges();

}

/**
 * For each group row, count the number of corresponding namespace rows and fill in the badge count
 */
function setBadges() {
  $(".badge").each( (i, badge) => {
    let group = badge.id.replace("badge-", "");
    let namespaces = group == "Total" ? $(".namespace") : $(`.namespace.${group}`);
    badge.textContent = `${namespaces.length}`;
  });
}

function groupExpander(group, category) {
  // Show or hide the namespace rows for this group
  $(`.namespace.${group}.${category}`).toggle();

  // Toggle the button text between + and -
  let button = $(`#btn-${group}-${category}`);
  button.text(button.text() == "+" ? "-" : "+");
}

