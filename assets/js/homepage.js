var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function (user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

var formSubmitHandler = function () {
  event.preventDefault();
  // get the value of the form <input> element
  var username = nameInputEl.value.trim();

  // check that there's a value in that username variable
  if (username) {
    getUserRepos(username);
    // Clear the form
    nameInputEl.value = "";
  } else {
    alert("Please enter a GitHub username");
  }
  console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);