const APIKey = 'b4ba1fb1f1bea7f50275057fd60c746f'
var jumbotron = document.getElementById("#jumbotron")
var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey
var userInput = ' '

console.log(userInput)
var searchButton = document.getElementById('searchButton')




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


function createItem() {
  localStorage.setItem(userInput, JSON.stringify(userInput.name))
}

function getInput() {
  return localStorage.getItem(userInput)
}


const getUsers = async () => {
  var userInput = document.getElementById('searchBarInput').value
  console.log(userInput)
  var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey
  await fetch(weatherURL)
    .then(response => response.json())
    .then(json => {
      // localStorage.setItem(localStorage.length + 1, JSON.stringify(json))
      localStorage.setItem(localStorage.length + 1, JSON.stringify(json.name))

    })

  for (let i = 0; i < localStorage.length; i++) {
    let cityName = JSON.parse(localStorage.getItem(localStorage.key(i)))
    console.log(cityName.name, cityName)
  }

}