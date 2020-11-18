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
  //add it to apiUrl as username param
  const urlCall = apiUrl + endpointsUrl;
  console.log(urlCall)
  //return string
  return urlCall
}

function displayResults(responseJson) {
  //remove previous results
  //loop through responseJson
  //add to html ul each element
  //display repo name, link to repo url
  //remove hidden class
}

function getResults(username) {
  console.log("getResults handle " + username);
  //get buildApiCall(username)
  buildApiCall(username);
  //call API
  //return results list in Json? in array? = responseJson
  //handle errors
  //display list to html, displayResults(responseJSon)
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