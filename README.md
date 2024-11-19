
## Uso de la aplicación

1.  Asegúrate de tener los archivos HTML y CSS vinculados correctamente en tu página web.
2.  Inserta un campo de entrada de texto en tu página con el ID "ciudadEntrada" para que los usuarios puedan ingresar el nombre de la ciudad.
3.  Agrega un botón con el ID "botonBusqueda" para permitir a los usuarios buscar el clima de la ciudad ingresada.
4.  Cuando un usuario haga clic en el botón de búsqueda, se llamará a la función `fetchDatosClima(ciudad)` con el valor ingresado en el campo de entrada de texto.
5.  La función `fetchDatosClima(ciudad)` realizará una solicitud a la API de OpenWeatherMap y obtendrá los datos del clima correspondientes a la ciudad ingresada.
6.  Una vez que se obtengan los datos del clima, la función `mostrarDatosClima(data)` mostrará los detalles relevantes del clima en la página.

Recuerda reemplazar `'API_KEY'` en el código con tu propia clave de API obtenida de OpenWeatherMap.

¡Ahora deberías tener una aplicación de clima completamente funcional en tu página web! Los usuarios podrán ingresar una ciudad y obtener información actualizada sobre el clima en esa ubicación.
