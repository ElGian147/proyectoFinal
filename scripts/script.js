document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Formulario completado");
      form.reset();
    });
  });
  