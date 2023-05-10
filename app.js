/*--cargar animaciones--*/
function cargarAnimaciones() {
  $(function () {
    $(".chart1").easyPieChart({
      size: 160,
      barColor: "#00c8ff",
      scaleLength: 0,
      lineWidth: 15,
      tackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
  });
}
//funcion para filtrar las categorias de los proyectos
function verCategoria(category) {
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  const itemCategory = document.getElementsByClassName(category);
  for (let i = 0; i < itemCategory.length; i++) {
    itemCategory[i].style.display = "block";
  }
  const links = document.querySelectorAll(".proyectos nav a");
  links[0].className = "";
  links[1].className = "";
  links[2].className = "";
  links[3].className = "";

  const itemSeleccionado = document.getElementById(category);
  itemSeleccionado.className = "borde";
}

//funcion de animacion de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName["chart1"];
    habilidades[0].classList.add["chart1"];
    habilidades[1].classList.add["chart1"];
    habilidades[2].classList.add["chart1"];
    habilidades[3].classList.add["chart1"];
    habilidades[4].classList.add["chart1"];
    habilidades[5].classList.add["chart1"];

    cargarAnimaciones();
  }
}
// se aplica la animacion de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
cargarAnimaciones();
// funcion para el menu responsive
function responsiveMenu() {
  let x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";

    //cerrar el menu
    let span = document.createElement("span");
    span.innerHTML = "x";
    document.getElementById("nav").appendChild(span);

    //sin boton eliminar
    span.onclick = function () {
      x.className = "";
      span.remove();
    };
  } else {
    x.className = "";
  }
}
