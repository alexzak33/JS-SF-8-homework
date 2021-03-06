/*

1. Sign up for openweathermap.org and generate an API key.
2. User either $.ajax or $.get to pull weather current data .
   for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
3. Print the temperature in the console. Note that the temperature will be in Kelvin.
4. Incorporate the following code into your app to log a Fahrenheit value for the temperature to the console
   (Fahrenheit temperature is stored in the degFInt variable):
   var degF = (temp - 273.15) * 1.8 + 32;
   var degFInt = Math.floor(degF);
5. Use DOM manipulation to add the returned temperature to the span element with the id "temp".
6. Sign up for developer.weatherunlocked.com and obtain your application ID and application key.
7. Repeat the above steps to obtain the current temperature from this data source, convert it to Fahrenheit,
   log it to the console, and then add it to the DOM (uncomment out the 3 lines indicated in index.html for this step,
   and add your temperature value to the span elmeent with the id "temp2").
8. Refactor your code as necessary to separate the code for DOM manipulation from the code for sending an HTTP request.
BONUS: Implement a form that prompts users for a city and state and returns data for the location they specify 
   (Uncomment out the existing form code in index.html as marked).

*/

'use strict';
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&units=imperial&APPID=a890a7d0310ad560c2457de54ce3577a', true);
weatherObject.send();
weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);


    
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
}
'use strict';
$(document).ready(function() {
    $('#currentTemp2').on("click", function(){

    });
});
/* var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id={2d821c5d}&app_key={596424eed8d1d51977fcd89dc1fbb29d}', true);
weatherObject.send();
weatherObject.onload = function() {
    var weatherInfo = JSON.click(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById("currentTemp2").innerHTML = weatherInfo.main.temp;
*/

document.querySelector("#getTemp").addEventListener('click', function() {
    console.log('Making request');
    fetch('http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id={2d821c5d}&app_key={596424eed8d1d51977fcd89dc1fbb29d}').then(function(response){
        if (response.ok){
            return response.json();
        } else {
            console.log(response.statusText);
        }
    }).then(function(data){
        console.log(data);
    });
}, false);