var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('#clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=866a03b109c4813304424b07e884194c')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var cloudValue = data['clouds'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  clouds.innerHTML = "Clouds - "+clouds;
  temp.innerHTML = "Temperature - "+(tempValue/10).toFixed(1)+"℃";
  input.value ="";

})

.catch(err => alert("Check City Name!"));
})