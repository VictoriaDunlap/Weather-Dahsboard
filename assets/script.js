var APIKey = 'b4ba1fb1f1bea7f50275057fd60c746f'

var userInputCity 
var userInputState
var storage = window.localStorage.setItem(userInputCity, userInputState)

// var searchInput = document.getElementById('searchBarInput')
var searchButton = document.getElementById('searchButton')

var 

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInputCity + '&appid=' + APIKey, {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

storage.addEventListener('click', () => { 
  
