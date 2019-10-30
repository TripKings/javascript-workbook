window.onload = function () {
    console.log('Hello World');
    getBrewery();
};


let getBrewery = function() {
    fetch('https://api.openbrewerydb.org/breweries?by_state=texas')
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