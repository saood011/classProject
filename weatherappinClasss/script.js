const proxy = "https://cors-anywhere.herokuapp.com/";

async function getData(){
    const cityName = document.getElementById('city').value;

let response = await fetch (

    `${proxy}api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=1e3ea3790d993992bae81ae76f408156`
);
let json = await response.json();
return json;
}
getData()