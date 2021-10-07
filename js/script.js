const login1 = document.getElementById("login1");
const login2 = document.getElementById("login2");
const loginuser = document.getElementById("loginuser");
const textlogin = document.getElementById("textlogin");
const textlogout = document.getElementById("textlogout");

//Se esta editando un estilo desde JS,
//donde textlogin (parrafo). enlosestilos.lapropiedad. se le va a asignar el valor hidden (oculto)
textlogin.style.visibility = "hidden";
textlogout.style.visibility = "hidden";

//Esta función la vamos a activar con un evento mouseover, cuando un usauario le pasa el mouse encima
// en el HTML, mostrar lo que estaba oculto
const show = () => {
  //al parrafo sus estilos la propiedad visibilidad es igual a hidden?
  if (textlogin.style.visibility == "hidden") {
    //el parrafo se le va a editar un estilo, que es la propiedad visibility y se le va a asignar
    // el valor visible
    textlogin.style.visibility = "visible";
  } else {
    textlogin.style.visibility = "hidden";
  }
};
// Este es para el logout
const show2 = () => {
  if (textlogout.style.visibility == "hidden") {
    textlogout.style.visibility = "visible";
  } else {
    textlogout.style.visibility = "hidden";
  }
};
//la propiedad de solo lectura local storage te permite acceder al objeto
// local storage y los datos persisten almacenados (en el navegador)
// * Nos permite almacenar datos de manera local en el navegador y sin necesidad
// de realizar alguna conexión a una base de datos

const iniciarSesion = () => {
  let usuario = prompt("Ingresa tu nombre");
  // set item está insertando un item o key - valor
  localStorage.setItem("name", usuario);
  //innerHTML sirve para "escribir dentro de un elemento HTML"
  loginuser.innerHTML = usuario;
};
// cuando se pone afuera de la función es para cuando se carga la página
// getitem es para obtener o recuperar el dato
if (localStorage.getItem("name")) {
  loginuser.innerHTML = localStorage.getItem("name");
}
const cerrarSesion = () => {
  loginuser.innerHTML = " ";
  // clear limpia el localStorage
  localStorage.clear();
};
login1.onclick = function () {
  iniciarSesion();
};
login2.onclick = function () {
  cerrarSesion();
};
login1.onmouseover = function () {
    show();
}
login2.onmouseover = function () {
    show2();
}
login1.onmouseout = function () {
    show();
}
login2.onmouseout = function () {
    show2();
}