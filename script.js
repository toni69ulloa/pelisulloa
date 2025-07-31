let todasLasPeliculas = [];
let paginaActual = 1;
const peliculasPorPagina = 18;
const paginasPorBloque = 15;
let bloqueActual = 0;
let categoriaActual = "Todos";

// Cargar JSON
fetch("peliculas.json")
  .then(res => res.json())
  .then(data => {
    todasLasPeliculas = data.sort((a, b) => {
      const fechaA = new Date(a.estreno || "1900");
      const fechaB = new Date(b.estreno || "1900");
      return fechaB - fechaA; // Más nuevas primero
    });

    mostrarCategorias();
    mostrarPeliculas();
    mostrarPaginacion();
  });

// Mostrar películas según filtros, página actual, etc.
function mostrarPeliculas() {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  const filtradas = filtrarPeliculas();
  const inicio = (paginaActual - 1) * peliculasPorPagina;
  const paginaPeliculas = filtradas.slice(inicio, inicio + peliculasPorPagina);

  for (const peli of paginaPeliculas) {
    const div = document.createElement("div");
    div.classList.add("pelicula");
    div.innerHTML = `
      <a href="ver.html?id=${peli.id}">
        <img src="${peli.imagen}" alt="${peli.titulo}">
        <h3>${peli.titulo}</h3>
        <p class="estreno">${peli.estreno || ""}</p>
      </a>
    `;
    galeria.appendChild(div);
  }
}

// Mostrar paginación por bloques
function mostrarPaginacion() {
  const contenedor = document.getElementById("paginacion");
  contenedor.innerHTML = "";

  const filtradas = filtrarPeliculas();
  const totalPaginas = Math.ceil(filtradas.length / peliculasPorPagina);

  const inicio = bloqueActual * paginasPorBloque + 1;
  const fin = Math.min(inicio + paginasPorBloque - 1, totalPaginas);

  // Flecha izquierda
  if (bloqueActual > 0) {
    const btnAnt = document.createElement("button");
    btnAnt.textContent = "❮";
    btnAnt.onclick = () => {
      bloqueActual--;
      paginaActual = bloqueActual * paginasPorBloque + 1;
      mostrarPaginacion();
      mostrarPeliculas();
    };
    contenedor.appendChild(btnAnt);
  }

  // Botones del bloque actual
  for (let i = inicio; i <= fin; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === paginaActual) btn.classList.add("activo");
    btn.onclick = () => {
      paginaActual = i;
      mostrarPeliculas();
      mostrarPaginacion();
    };
    contenedor.appendChild(btn);
  }

  // Flecha derecha
  if (fin < totalPaginas) {
    const btnSig = document.createElement("button");
    btnSig.textContent = "❯";
    btnSig.onclick = () => {
      bloqueActual++;
      paginaActual = bloqueActual * paginasPorBloque + 1;
      mostrarPaginacion();
      mostrarPeliculas();
    };
    contenedor.appendChild(btnSig);
  }
}

// Filtro por categoría
function mostrarCategorias() {
  const contenedor = document.getElementById("categorias");
  contenedor.innerHTML = "";

  const categoriasSet = new Set();
  todasLasPeliculas.forEach(p => {
    if (Array.isArray(p.categoria)) {
      p.categoria.forEach(cat => categoriasSet.add(cat));
    } else {
      categoriasSet.add(p.categoria);
    }
  });

  const todas = ["Todos", ...Array.from(categoriasSet).sort((a, b) => a.localeCompare(b))];

  todas.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    if (cat === categoriaActual) btn.classList.add("activo");
    btn.onclick = () => {
      categoriaActual = cat;
      paginaActual = 1;
      bloqueActual = 0;
      mostrarPeliculas();
      mostrarPaginacion();
      mostrarCategorias();
    };
    contenedor.appendChild(btn);
  });
}

// Filtra por categoría y buscador
function filtrarPeliculas() {
  const texto = document.getElementById("buscador").value.toLowerCase();

  return todasLasPeliculas.filter(p => {
    const coincideCategoria =
      categoriaActual === "Todos" ||
      (Array.isArray(p.categoria)
        ? p.categoria.includes(categoriaActual)
        : p.categoria === categoriaActual);

    const coincideTexto = p.titulo.toLowerCase().includes(texto);

    return coincideCategoria && coincideTexto;
  });
}

// Buscador
document.getElementById("buscador").addEventListener("input", () => {
  paginaActual = 1;
  bloqueActual = 0;
  mostrarPeliculas();
  mostrarPaginacion();
});
