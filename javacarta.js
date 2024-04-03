// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById('openBtn');
    const mensajeDiv = document.getElementById('mensaje');
    const imageContainer = document.querySelector('.image-carta');
  
    openBtn.addEventListener('click', function() {
      mensajeDiv.style.display = 'block'; // Mostrar el mensaje al hacer clic en el botón
      openBtn.style.display = 'none'; // Ocultar el botón después de hacer clic
      imageContainer.style.display = 'none'; // Ocultar la imagen después de hacer clic
    });
  });
  
  