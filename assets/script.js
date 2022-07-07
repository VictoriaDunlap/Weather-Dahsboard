var APIKey = 'b4ba1fb1f1bea7f50275057fd60c746f'

var userInput 

var storage = localStorage.setItem('userInput', JSON.stringify(userInput))

// var searchInput = document.getElementById('searchBarInput')
var searchButton = document.getElementById('searchButton')

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey, {
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
 localStorage.setItem('userInput')
}
createItem();

function getInput() {
  return localStorage.getItem('userInput')
}
console.log(getInput());