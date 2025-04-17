
let endpoint = "https://api.github.com/search/issues?q=org:NIEM+state:open&per_page=100&page=";
let totalCount = 0;
let page = 1;

/** @type {{login: string}} */
let UserType;

/** @type {{name: string, url: string, color: string}} */
let LabelType;

/** @type {{html_url: string, title: string, state: string, open_issues: number, number: number}} */
let MilestoneType;

/** @type {{html_url: string, repository_url: string, number: number, title: string, state: string, assignee: UserType, user: UserType, body: string, created_at: string, updated_at: string, labels: LabelType[], milestone: MilestoneType}} */
let IssueType;

/** @type {IssueType[]} */
let allIssues = [];

/** @type {IssueType[]} */
let currentIssues = [];

/** @type {String[]} */
let allRepos = [];

/** @type {String[]} */
let currentRepos = [];

/** @type {String[]} */
let activeRepos = [];

let inactiveRepos = ["How-to-Upload-an-IEPD-to-GitHub", "Implementation-Cookbook", "Movement", "NBAC-NTAC-collaboration", "NIEM-UML", "Schematron-in-XSD-Spec"];

/** @type {String[]} */
let currentAssignees = [];

let staffLogins = ["CB2", "cchipman6", "cdmgtri", "jasonlancaster", "iamdrscott", "markrdotson", "smrubin", "TomCarlson-NTAC", "webb"];

let $data = $("#data");
let $labelFilter = $("#label-filter");
let $selectRepos = $("#select-repos");
let $selectGroupBy = $("#select-groupBy");
let $selectSort = $("#select-sort");
let $checkboxUnassigned = $("#filter-unassigned");
let $checkboxExternal = $("#filter-external");

getIssues();

/**
 * Grab issue data from GitHub API for all NIEM organization repositories
 */
async function getIssues() {

  let response = $.get(endpoint + page++, function (data, status, xhr) {
    if (status == "success") {
      allIssues = allIssues.concat(data.items);
      totalCount = data.total_count;

      let responseHeaders = xhr.getAllResponseHeaders();
      let link = xhr.getResponseHeader("Link");
      let remaining = xhr.getResponseHeader("X-RateLimit-Remaining");
      console.log(remaining, "GitHub API calls remaining this minute");

      if (link.includes(`rel="next"`)) {
        getIssues();
      }

      if (totalCount == allIssues.length) {
        processIssues();
        displayResults();
      }
    }
    else {
      setStatus(status);
    }
  })

}

/**
 * Process the API issue results
 */
function processIssues() {

  allIssues.forEach( issue => {
    issue.repo = issue.repository_url.split("/").pop();
    issue.repoURL = issue.repository_url.replace(".api", "").replace("repos/", "");

    if (!issue.assignee) {
      issue.assignee = {
        login: "unassigned"
      }
    }
  });

  allRepos = [... new Set( allIssues.map( issue => issue.repo ))].sort();

  setStatus("Done");
  $("#status-message").hide();
  $("#issue-header").show();

  inactiveRepos = allRepos.filter( repo => inactiveRepos.includes(repo) );
  activeRepos = allRepos.filter( repo => ! inactiveRepos.includes(repo) );

}

/**
 * Displays issue results according to the currently-selected display-by menu option
 */
function displayResults() {

  $labelFilter.hide();
  updateRepoFilter();
  updateSort();
  updateAssignees();

  switch ($selectGroupBy.val()) {
    case "issue":
      groupByIssues();
      break;
    case "assignee":
      groupByAssignees();
      break;
    case "repo":
    default:
      groupByRepos();
      break;
  }

  $("#issue-count").text(currentIssues.length);
  $("#repo-count").text(currentRepos.length);
  finalizeDisplay();

}

/**
 * Displays issue results grouped by repo
 */
function groupByRepos() {

  $data.empty();

  currentRepos.forEach( repo => {
    let repoURL = getRepoURL(repo);
    let repoIssues = currentIssues.filter( issue => issue.repo == repo );

    let $repoDiv = $(`
      <details>
        <summary><strong>${repo}</strong> (${repoIssues.length})</summary>
        <div class="box">
          <p>
            <a href='${repoURL}'>Repo</a>
              ${ getSpacer() }
            <a href='${repoURL}/issues'>Issues</a>
              ${ getSpacer() }
            <a href='${repoURL}/projects'>Projects</a>
          </p>
          <ul>
            ${repoIssues.map( issue => getIssueListItem(issue, false, true) ).join("")}
          </ul>
        </div>
      </details>
    `);

    $data.append($repoDiv);
  });
}

/**
 * Displays issue results as a flat list of issues
 */
function groupByIssues() {
  $data.empty();
  let $issueList = $(`
    <ul>
      ${ currentIssues.map( issue => getIssueListItem(issue, true, true) ).join("") }
    </ul>
  `);
  $data.append($issueList);
}

/**
 * Displays issue results grouped by assignee
 */
function groupByAssignees() {

  $data.empty();

  currentAssignees.forEach( assignee => {

    let issues = currentIssues.filter( issue => issue.assignee.login == assignee );

    let $assigneeDiv = $(`
      <details>
        <summary><strong>${assignee}</strong> (${issues.length})</summary>
        <div class="box">
          <p>${getAssigneeLink({login: assignee})}</p>
          <ul>
            ${ issues.map( issue => getIssueListItem(issue, true, false) ).join("") }
          </ul>
        </div>
      </details>
      <br/>
    `);

    $data.append($assigneeDiv);
  });

}

function finalizeDisplay() {
  updateExternalLinks();
}

/**
 */
function updateRepoFilter() {

  switch ($selectRepos.val()) {
    case "all":
      filterAllRepos();
      break;
    case "active":
      filterActiveRepos();
      break;
    case "inactive":
      filterInactiveRepos();
      break;
  }

  if ($checkboxUnassigned.is(":checked")) {
    currentIssues = currentIssues.filter( issue => issue.assignee.login == "unassigned" );
  }
  if ($checkboxExternal.is(":checked")) {
    currentIssues = currentIssues.filter( issue => !staffLogins.includes(issue.user.login) );
  }

  filterCurrentRepos();
}

/**
 * Removes the issue filter so issues from all repos will be displayed
 */
function filterAllRepos() {
  currentRepos = allRepos;
  currentIssues = allIssues;
}

/**
 * Sets the issue filter so only issues from active repos will be displayed
 */
function filterActiveRepos() {
  currentIssues = allIssues.filter( issue => activeRepos.includes(issue.repo) );
  $labelFilter.show();
}

/**
 * Sets the issue filter so only issues from repos designated at the top of this
 * file as inactive will be displayed
 */
function filterInactiveRepos() {
  currentIssues = allIssues.filter( issue => inactiveRepos.includes(issue.repo) );
  $labelFilter.show();
}

function filterCurrentRepos() {
  currentRepos = [...new Set(currentIssues.map( issue => issue.repo ))];
}

/**
 * Sort issues
 */
function updateSort() {
  switch ($selectSort.val()) {
    case "oldest": return sortOldest();
    case "newest": return sortNewest();
  }
}

/**
 * Sorts issues by oldest creation date first
 */
function sortOldest() {
  currentIssues = currentIssues.sort( (a, b) => {
    return (a.created_at < b.created_at) ? -1 : 1;
  });
}

/**
 * Sorts issues by newest creation date first
 */
function sortNewest() {
  currentIssues = currentIssues.sort( (a, b) => {
    return (a.created_at > b.created_at) ? -1 : 1;
  });
}

/**
 * Updates the current list of assignees based on the latest issue filter (all, active, or inactive)
 */
function updateAssignees() {
  currentAssignees = [... new Set( currentIssues.map( issue => issue.assignee?.login ) )].sort();
}

/**
 * Gets a list item element with issue title and metadata.
 * @param {IssueType} issue
 * @param {boolean} displayRepo
 * @param {boolean} displayAssigned
 */
function getIssueListItem(issue, displayRepo=false, displayAssigned=false) {
  let created = issue.created_at.split("T")[0];
  let updated = issue.updated_at.split("T")[0];
  return `
    <li>
      <p>
        ${ getTitle(issue) }
        ${ getRepoLink(displayRepo, issue) }
        <a href="${issue.html_url}">Issue #${issue.number}</a>
        ${ getSpacer() }
        Created by ${getUserLink(issue.user)} on ${issue.created_at.split("T")[0]}
        ${ getMetadata( displayAssigned, "Assigned to " + getAssigneeLink(issue.assignee)) }
        ${ getMetadata( created != updated, "Updated " + updated) }
        ${ getMetadata( issue.milestone, getMilestoneLink(issue)) }
        ${ getLabels( issue ) }
      </p>
    </li>
  `;
}


/**
 * Gets the issue title for the issue item display.
 * Includes an onclick event that will copy basic issue details to the clipboard for easy pasting
 * into an email message or other file.
 * @param {IssueType} issue
 */
function getTitle(issue) {
  return `
    <span class="copy" onclick="copyIssueDetails(event)"
        data-title="${issue.title}" data-url="${issue.html_url}"
        data-number="${issue.number}" data-repo="${issue.repo}">
      <strong>${issue.title}</strong>
    </span> <br/>
  `;
}

/**
 * Onclick event handler that copies basic issue details to the clipboard.
 * @param {Event} event
 */
function copyIssueDetails(event) {
  let number = $(event.target.parentNode).data("number");
  let repo = $(event.target.parentNode).data("repo");
  let title = $(event.target.parentNode).data("title");
  let url = $(event.target.parentNode).data("url");
  copyTextToClipboard(`${repo} #${number}: ${title}\n${url}`);
}

/**
 * Returns a padded spacer character to add extra spacing between menu items
 */
function getSpacer() {
  return "<span class='spacer'> | </span>";
}

/**
 * Gets the repo link for the issue item display.
 * @param {IssueType} issue
 */
function getRepoLink(displayRepo, issue) {
  if (displayRepo) {
    return `<a href='${getRepoURL(issue.repo)}'>${issue.repo}</a> ${ getSpacer() }`;
  }
  return "";
}

/**
 * Gets a piece of metadata with a spacer for the issue item display if the given condition is true
 * @param {boolean} condition
 * @param {string} text
 */
function getMetadata(condition, text) {
  if (condition) {
    return getSpacer() + text;
  }
  return "";
}

/**
 * Gets all issue labels for the issue item display with the original GitHub issue label colors
 * Changes the standard "dependencies" label color to something easier to see on the screen.
 * @param {IssueType} issue
 */
function getLabels(issue) {
  let html = (issue.labels.length > 0) ? "<span class='spacer'> | </span> " : "";
  issue.labels.forEach( label => {
    let color = (label.color == "0366d6") ? "a8c5e7" : label.color;
    let labelURL = `https://github.com/NIEM/${issue.repoName}/labels/${label.name}`;
    html += getLabel(label.name, labelURL, "#" + color) + " ";
  });
  return html;
}

/**
 * Gets a formatted label given a name, optional url, and HTML color.
 */
function getLabel(name, url, color) {
  let href = url ? `href="${url}"` : "disabled";
  return `<span class="label" style="background-color: ${color}"><a ${href}>${name}</a></span>`;
}

/**
 * Gets the issue milestone for the issue item display
 * @param {IssueType} issue
 */
function getMilestoneLink(issue) {
  if (issue.milestone) {
    return `<a href="https://github.com/NIEM/${issue.repoName}/milestone/${issue.milestone.number}">${issue.milestone.title}</a>`;
  }
  return "";
}

/**
 * Gets the issue creator for the issue item display.
 * Link is to the user's GitHub profile.
 * @param {UserType} user
 */
  function getUserLink(user) {
  return `<a href="https://github.com/${user.login}">${user.login}</a>`;
}

/**
 * Gets the issue assignee link for the issue item display.
 * Link is the a list of all issues assigned to that account.
 * @param {UserType} assignee
 */
function getAssigneeLink(assignee) {
  if (assignee.login != "unassigned") {
    let url = `https://github.com/search?q=assignee:${assignee.login}+is:open+is:issue`;
    return getLabel(assignee.login, url, "gainsboro");
  }
  return getLabel("unassigned", null, "mistyrose");
}

/**
 * Gets the URL of the NIEM repo given the repo name.
 */
function getRepoURL(repoName) {
  return "https://github.com/NIEM/" + repoName;
}

/**
 * Sets the loading status for the message at the top of the page
 */
function setStatus(status) {
  $("#status").text(status);
}
