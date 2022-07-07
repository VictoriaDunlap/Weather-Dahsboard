var APIKey = 'b4ba1fb1f1bea7f50275057fd60c746f'
var jumbotron = document.getElementById("#jumbotron")

// var weatherURL = "'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey"
var userInput = 'atlanta'

var storage = localStorage.setItem('userInput', JSON.stringify(userInput))
console.log(userInput)

// var searchInput = document.getElementById('searchBarInput')
var searchButton = document.getElementById('searchButton')
// + userInput + '&appid=' + 
// function getWeather () 

fetch('https:api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey, {
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
})

function createItem() {
 localStorage.setItem('atlanta')
}
createItem();

function getInput() {
  return localStorage.getItem('atlanta')
}
console.log(getInput());