let api_key = "414d8bfd03aaa8af12e4a0120f724d0e";
let difKelvin = 272.15;
let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let idioma = "es";

//colcamos un escuchador de eventos al boton buscar y agregamos la funcion
document.getElementById("botonBusqueda").addEventListener("click", () => {
  // tomamos el valor del input y lo enviamos a la variable ciudad
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad); // esta funcion enviara el valor del input
  } else {
    document.getElementById("datosClima").innerHTML = "Escribe una ciudad";
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&lang=${idioma}`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => mostrarDatosClima(respuesta));
}

function mostrarDatosClima(respuesta) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = respuesta.name; // asignamos el nombre de la respuesta a la variable
  const paisNombre = respuesta.sys.country; // asignamos el nombre de la respuesta a la variable
  const temperatura = respuesta.main.temp; // asignamos la temperatura de la respuesta a la variable
  const descripcion = respuesta.weather[0].description; // asignamos la descripcion de la respuesta a la variable
  const icono = respuesta.weather[0].icon; //
  const clima = respuesta.weather[0].main; //

  const ciudadTitulo = document.createElement("h1"); // creamos un h2 dentro del div
  ciudadTitulo.textContent = `${ciudadNombre},(${paisNombre})`;

  const latemperatura = document.createElement("h3"); // creamos un h5 dentro del div
  latemperatura.textContent = `Sensación térmica`;

  const ciudadtemperatura = document.createElement("h2"); // creamos un h5 dentro del div
  ciudadtemperatura.textContent = `${Math.floor(temperatura - difKelvin)}°C`;

  const ciudaddescripcion = document.createElement("p"); // creamos un p dentro del div
  ciudaddescripcion.textContent = `La descripción meteorológica es: ${descripcion}`;

  const ciudadicono = document.createElement("img"); // creamos un p dentro del div
  ciudadicono.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const ciudadclima = document.createElement("p"); // creamos un p dentro del div
  ciudadclima.textContent = `El clima es: ${clima}`;

  // inseertamos los elementos o etiquetas creados al div
  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(ciudadicono);
  divDatosClima.appendChild(ciudadtemperatura);
  divDatosClima.appendChild(latemperatura);
  divDatosClima.appendChild(ciudaddescripcion);
  divDatosClima.appendChild(ciudadclima);
}
