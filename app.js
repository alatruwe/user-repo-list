/* what I need to call GitHub API:
- authentication: yes, but not always
- API key: not needed here
- Base URL: https://api.github.com
- CORS: yes
- response data format: JSON
- response status code: yes
- response data structure: only a summary representation (should be ok for the assignment)
- any limitations?
- endpoints URL: /users/{username}/repos
- endpoints param needed: username in path
- endpoints query needed: type, sort, per_page, page...
- endpoints body needed: no
- endpoints header required: User-Agent = github username or name of application
*/

//API Base URL
const apiUrl = 'https://api.github.com';

function buildApiCall(username) {
  //hard coded API endpoint for assignment
  const endpointsUrl = "/users/" + username + "/repos";
  console.log(endpointsUrl);
  //add endpoints to base url
  const urlCall = apiUrl + endpointsUrl;
  console.log("buildApiCall return " + urlCall)
  //return string
  return urlCall
}

function displayResults(responseJson) {
  //remove previous results
  $('#results-list').empty();
  //loop through responseJson
  for (let i = 0; i < responseJson.length; i++) {
    //add to html ul each element
    $('#results-list').append(
      //repo name, link to repo url
      `<li><h3><a target="_blank" href="
        ${responseJson[i].svn_url}">${responseJson[i].name}</a>
        </h3></li>`
  )};
  //remove hidden class
  $('#results').removeClass('hidden');
}

function getResults(username) {
  console.log("getResults handle " + username);
  //get buildApiCall(username)
  const urlCall = buildApiCall(username);
  //call API
  fetch(urlCall)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    //display list to html, displayResults(responseJSon)
    .then(responseJson => displayResults(responseJson))
    //handle errors
    .catch((error) => $('.js-error-message').text(`An error occured: ${error.message}`))
}

function submitForm() {
  //watch for submit event
  $('form').submit(event => {
    event.preventDefault();
    //get user entry = username param
    const username = $('#github-handle').val();
    //get and display results, getResults(username)
    getResults(username);
  });
}

$(submitForm);