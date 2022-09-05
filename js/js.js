// api keys = 5e78fe9543f59f95d0e4db4d3faa7aa6
const API_key =`5e78fe9543f59f95d0e4db4d3faa7aa6`

const loadTemperature =(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayTempersture(data));
}

const displayTempersture =data =>{
    const tempereture = document.getElementById('teamp');
    tempereture.innerText =`
    ${data.main.temp}
    `
}
loadTemperature('Dhaka')
