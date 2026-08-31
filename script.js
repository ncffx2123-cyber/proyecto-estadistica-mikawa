document.addEventListener("DOMContentLoaded", () => {
  console.log("Proyecto de Estadística - Mikawa cargado correctamente.");

  const botones = document.querySelectorAll(".btn");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      console.log("El usuario ingresó a la encuesta.");
    });
  });
});
