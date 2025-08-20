const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));
const contenedor = document.getElementById("detalle");

fetch(`pelicula-${id}.json`)
  .then(res => res.json())
  .then(peli => {
    if (!peli) {
      contenedor.innerHTML = "<h2>Película no encontrada</h2>";
      return;
    }

    const bandera = peli.idioma.toLowerCase() === "latino"
      ? '<img src="https://flagcdn.com/w20/mx.png" alt="MX" class="bandera">'
      : "";

    let botonesHTML = "";
    let reproductorURL = "";

    if (Array.isArray(peli.iframes) && peli.iframes.length > 0) {
      botonesHTML = peli.iframes.map((rep, i) =>
        `<button onclick="cambiarReproductor('${rep.url}', this)" class="${i === 0 ? 'activo' : ''}">${rep.nombre}</button>`
      ).join("");

      reproductorURL = peli.iframes[0].url;
    }

    contenedor.innerHTML = `
      <div class="pelicula-detalle">
        <img src="${peli.imagen}" alt="${peli.titulo}" class="poster" onerror="this.src='imagen-no-disponible.jpg'">
        <div class="info-pelicula">
          <h2>${peli.titulo}</h2>
          <p>${peli.descripcion}</p><br>
          <p><strong>Duración:</strong> ${peli.duracion}</p><br>
          <p><strong>Calidad:</strong><span class="badge-calidad">${peli.calidad}</span></p>
          <p><strong>Idioma:</strong> ${peli.idioma} ${bandera}</p><br>
          <p><strong>Estreno:</strong> ${peli.estreno}</p>
        </div>
      </div>

      <div class="botones-reproductores">
        ${botonesHTML}
      </div>

      <div class="reproductor-container">
        <iframe id="reproductor" src="${reproductorURL}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  });

function cambiarReproductor(url, boton) {
  const iframe = document.getElementById("reproductor");
  iframe.src = url;

  document.querySelectorAll(".botones-reproductores button").forEach(b => b.classList.remove("activo"));
  boton.classList.add("activo");
}

