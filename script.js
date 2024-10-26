const apiKey = "befd984de4d3c050671d4eb935e6c660";

function loadData() {
  clearData(); // Clear previous data before fetching new data
  const city = document.getElementById("name").value;
  const spinner = document.getElementById("spinner");
  const error = document.getElementById("error");
  const result = document.getElementById("result");

  const cityNameDisplay = document.getElementById("city");
  const tempDisplay = document.getElementById("temp");
  const humidityDisplay = document.getElementById("hum");
  const windDisplay = document.getElementById("wind");

  spinner.style.display = "block";
  result.style.display = "none";
  error.style.display = "none";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      spinner.style.display = "none";
      result.style.display = "block";

      // Display the weather data
      cityNameDisplay.textContent = `City Name: ${data.name}`;
      tempDisplay.innerHTML = `<i class="fa-solid fa-sun"></i> Temperature: ${data.main.temp} °C`;
      humidityDisplay.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity: ${data.main.humidity}%`;
      windDisplay.innerHTML = `<i class="fa-solid fa-wind"></i> Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch((err) => {
      spinner.style.display = "none";
      error.innerText = err.message || "ERROR";
      result.style.display = "block";
      error.style.display = "block";
    });
}

function clearData() {
  const cityNameDisplay = document.getElementById("city");
  const tempDisplay = document.getElementById("temp");
  const humidityDisplay = document.getElementById("hum");
  const windDisplay = document.getElementById("wind");

  // Clear the displayed weather data
  cityNameDisplay.textContent = "City Name: --";
  tempDisplay.innerHTML = '<i class="fa-solid fa-sun"></i> Temperature: --';
  humidityDisplay.innerHTML =
    '<i class="fa-solid fa-droplet"></i> Humidity: --';
  windDisplay.innerHTML = '<i class="fa-solid fa-wind"></i> Wind Speed: --';
}