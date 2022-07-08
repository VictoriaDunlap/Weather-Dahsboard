var APIKey = 'b4ba1fb1f1bea7f50275057fd60c746f'
var jumbotron = document.getElementById("#jumbotron")
var weatherURL = "'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey"
var userInput
var storage = localStorage.setItem('userInput', JSON.stringify(userInput))
console.log(userInput)
var searchButton = document.getElementById('searchButton')


var searchBarInput = document.getElementById('searchBarInput').value


var ui = new UIEvent()
var fetch = new fetch()
var options = {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
}

// initial fetch function to communicate with the api 
function getWeather(weatherURL) {
  fetch(weatherURL, options)
  .then(function (response) {
    return response.json()
  })
  .then(function (response) {
    console.log(response);
   
  })
}
getWeather()



searchButton.addEventListener('click', () => { 
  // var value = searchBarInput.value
  // fetch.getCurrent(value).then((data) => {
  //   ui.populateUI(data)
  //   ui.saveToLS(data)
  //   jumbotron.textContent = data.main.temp
  // })
  () => {
    searchBarInput
  }
})

function createItem() {
 localStorage.setItem(userInput, JSON.stringify(userInput))
}
createItem();

function getInput() {
  return localStorage.getItem(userInput)
}
console.log(getInput());