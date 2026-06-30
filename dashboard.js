async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "e17219c701f84ddcb4270839263006";

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message);
            return;
        }

        document.getElementById("temperature").textContent =
            data.current.temp_c + " °C";

        document.getElementById("humidity").textContent =
            data.current.humidity + " %";

        document.getElementById("wind").textContent =
            data.current.wind_kph + " km/h";

        document.getElementById("condition").textContent =
            data.current.condition.text;
        let condition = data.current.condition.text.toLowerCase();

        let image = "";

        if (condition.includes("sunny") || condition.includes("clear")) {
            image = "images/sunny.gif";
        }
        else if (condition.includes("cloud")) {
            image = "images/cloud.webp";
        }
        else if (condition.includes("rain") || condition.includes("drizzle")) {
            image = "images/rain.jpg";
        }
        else if (condition.includes("snow") || condition.includes("sleet") || condition.includes("blizzard")) {
            image = "images/snow.jpg";
        }
        else if (condition.includes("thunder") || condition.includes("storm")) {
            image = "images/storm.avif";
        }
        else {
            image = "images/default.jpg";
        }

        document.body.style.backgroundImage = `url('${image}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    } catch (error) {
        alert("Unable to fetch weather data.");
        console.log(error);
    }
}