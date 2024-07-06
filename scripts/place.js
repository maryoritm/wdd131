document.addEventListener("DOMContentLoaded", function () {
    const lastModified = document.getElementById("lastModified");
    const windChillSpan = document.getElementById("windChill");

    // Footer last modified date
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    // Static temperature and wind speed values
    const temperature = 19; // °C
    const windSpeed = 10; // km/h

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        return (temp <= 10 && wind > 4.8) ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) : "N/A";
    }

    // Set wind chill value
    windChillSpan.textContent = calculateWindChill(temperature, windSpeed);
});
