var serachInput = document.querySelector('#citySearch');

var formSubmitHandeler = function(event) {
    event.preventDefault();
    var city = serachInput.value.trim();

    if(!city || city === "" || !isNaN(city)) {
        alert('Please enter the name of a City!');
        serachInput.value = "";
    } else {
        cityWeather(city);
        serachInput.value = "";
    }
};

var cityWeather = function(city) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=4473e73356f0ef2504a057bce682a5df'

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {

            });
        } else {
            alert('Your City Was Not Found!');
        }
    });
};