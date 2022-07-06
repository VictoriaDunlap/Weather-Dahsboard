fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=b4ba1fb1f1bea7f50275057fd60c746f', {
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
