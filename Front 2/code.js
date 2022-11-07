/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {

  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
  datosPersona.nombre = prompt("Ingrese su nombre:");

  let edadUsuario = parseInt(prompt("Ingrese año de su nacimiento:"));
  datosPersona.edad = 2022 - edadUsuario;

  datosPersona.ciudad = prompt("Ingrese su ciudad de nacimiento:");

  datosPersona.interesPorJs = confirm("Le interesa Javascript:");

} 



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */

  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  document.getElementById("javascript").innerText = datosPersona.interesPorJs ? "Si": "No";

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
 listado.forEach((materias)=> {
document.getElementById("fila").innerHTML += `
<div class='caja'>

       <img src= "${materias.imgUrl}"/>

       <p class='lenguajes'>Lenguajes: ${materias.lenguajes}</p>

       <p class='bimestre'>Bimestre: ${materias.bimestre}</p>
      
    </div>

    `;
 });


 materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  let darkmode = document.getElementById("sitio");
  darkmode.classList.toggle("dark");
}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

function mostrarContenido() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "f") { 
      
      let oculto = document.querySelector('.oculto');
      oculto.classList.remove('oculto');
      
    }
  })
}
mostrarContenido()







