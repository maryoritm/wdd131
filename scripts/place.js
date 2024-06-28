document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('last-modified');

    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

    const temperature = 10; 
    const windSpeed = 5; 

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill-factor').textContent = windChill;
});

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + "°C";
    } else {
        return 'N/A';
    }
}
