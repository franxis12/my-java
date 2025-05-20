const apiKey = "974c2d461f5fa397a2ca10f0aa2bf549"; // ← reemplaza esto con tu clave real

document.getElementById("buscarBtn").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudad").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }
      return response.json();
    })
    .then(data => {
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperatura: ${data.main.temp} °C</p>
        <p>☁️ Clima: ${data.weather[0].description}</p>
        <p>💨 Viento: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("resultado").innerHTML = `<p>${error.message}</p>`;
    });
});