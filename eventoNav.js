// Escucha el evento 'DOMContentLoaded' para asegurar que el DOM esté completamente cargado antes de ejecutar el script.
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene todos los enlaces dentro del elemento <nav>.
  // Esto permite interactuar con los enlaces del menú de navegación.
  const navLinks = document.querySelectorAll("nav a");

  // Selecciona solo las secciones dentro de un contenedor con la clase 'main-content'.
  // Esto limita la interacción a las secciones relevantes.
  const mainSections = document.querySelectorAll(".main-content > section");

  // Función para mostrar una sección específica y ocultar las demás.
  // Recibe el ID de la sección que desea mostrar.
  function showSection(sectionId) {
    // Itera sobre cada sección seleccionada anteriormente.
    mainSections.forEach((section) => {
      // Comprueba si el ID de la sección actual coincide con el ID proporcionado.
      if (section.id === sectionId) {
        // Si coincide, remueve la clase 'hidden' de la sección,
        // lo que la hace visible si la clase 'hidden' establece display: none en CSS.
        section.classList.remove("hidden");
      } else {
        // Si no coincide, añade la clase 'hidden' a la sección,
        // lo que la oculta si la clase 'hidden' establece display: none en CSS.
        section.classList.add("hidden");
      }
    });
  }

  // Agrega un controlador de eventos a cada enlace del menú de navegación.
  navLinks.forEach((link) => {
    // Previene el comportamiento predeterminado del enlace (navegación).
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Obtiene el ID de la sección al que apunta el enlace.
      // Se usa substring(1) para eliminar el carácter '#' inicial del href.
      const sectionId = this.getAttribute("href").substring(1);
      // Muestra la sección correspondiente.
      showSection(sectionId);
    });
  });

  // Muestra la sección de inicio por defecto cuando la página se carga.
  // Esto asegura que haya una sección visible desde el principio.
  showSection("inicio");
});
