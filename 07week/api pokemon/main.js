window.onload = function () {
    console.log('Hello World');
    getBrewery();
};


let getBrewery = function() {
    fetch('https://sandbox-api.brewerydb.com/v2/?key=94abd6fc20a5c6b02c0568268f70d2dc')
        .then(function (response) {
        return response.json();
    })
    .then(function(payload){
        console.log(payload)
    })


}




var myLocation = document.getElementById("myCoordinates");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition);
  } else {
    myLocation.innerHTML = "Not available";
  }
}

function displayPosition(position) {
  myLocation.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    " Latitude: " +
    position.coords.latitude;
}