var APIKey = 'b4ba1fb1f1bea7f50275057fd60c746f'
var jumbotron = document.getElementById("#jumbotron")

var weatherURL = "'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey"
var userInput

var storage = localStorage.setItem('userInput', JSON.stringify(userInput))
console.log(userInput)

// var searchInput = document.getElementById('searchBarInput')
var searchButton = document.getElementById('searchButton')
var searchBarInput = document.getElementById('searchBarInput')
var ui = UIEvent()
var fetch = fetch()
// + userInput + '&appid=' + 
// function getWeather () 

function getWeather(weatherURL) {
  fetch('https:api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey, {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    jumbotron.textContent = data.main.temp
});
}

searchButton.addEventListener('click', () => { 
  var value = searchBarInput.value

  fetch.getCurrent(value).then((data) => {
    ui.populateUI(data)
    ui.saveToLS(data)
  })
})

function createItem() {
 localStorage.setItem(userInput, JSON.stringify(userInput))
}
createItem();

function getInput() {
  return localStorage.getItem(userInput, JSON.stringify(userInput))
}
console.log(getInput());