import {
  postDepartamento as postDepartamento,
  getDepartamento as getDepartamento,
  deleteDepartamento as deleteDepartamento,
  actualizarDepartamento as actualizarDepartamento,
  postCiudad as postCiudad,
  getCiudad as getCiudad,
  deleteCiudad as deleteCiudad,
  actualizarCiudad as actualizarCiudad,
} from "./peticiones.js";

document.addEventListener("DOMContentLoaded", () => {
  getDepartamento().then(() => {
    getCiudad();
  });
});

let form = document.querySelector("#form");
let tbodyDepartamentos = document.querySelector("#tbodyDepartamentos");
let formActualizar = document.querySelector("#formActualizar");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = Object.fromEntries(new FormData(e.target));

  let accion = e.submitter.dataset.accion;

  if (accion === "Registrar") {
    postDepartamento(data);
  }
});

tbodyDepartamentos.addEventListener("click", (e) => {
  e.preventDefault();

  let tr = e.target.closest("tr");
  let id = tr.id;

  let accion = e.target.dataset.accion;

  if (accion === "Eliminar") {
    deleteDepartamento(tr, id);
    tr.remove();
  } else if (accion === "Actualizar") {
    formActualizar.addEventListener("submit", (e) => {
      e.preventDefault();

      let data = Object.fromEntries(new FormData(e.target));
      actualizarDepartamento(data, id);
    });
  }
});

let formCiudades = document.querySelector("#formCiudades");
let tbodyCiudades = document.querySelector("#tbodyCiudades");
let formActualizarCiudad = document.querySelector("#formActualizarCiudad");

formCiudades.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = Object.fromEntries(new FormData(e.target));

  data.departamentoId = parseInt(data.departamentoId, 10);

  let accion = e.submitter.dataset.accion;

  if (accion === "RegistrarCiudad") {
    postCiudad(data);
  }
});

tbodyCiudades.addEventListener("click", (e) => {
  e.preventDefault();

  let tr = e.target.closest("tr");
  let id = tr.id;

  let accion = e.target.dataset.accion;

  if (accion === "EliminarCiudad") {
    deleteCiudad(tr, id);
    tr.remove();
  } else if (accion === "ActualizarCiudad") {
    formActualizarCiudad.addEventListener("submit", (e) => {
      e.preventDefault();

      let data = Object.fromEntries(new FormData(e.target));
      actualizarCiudad(data, id);
    });
  } else if (accion === "VerClima") {
    const nodo = tr.children[1];
    const nomCiudad = nodo.innerHTML;
    console.log(data);
  }
});

async function climaCiudad(ciudad){
  const url = `https://open-weather13.p.rapidapi.com/city/${ciudad}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c708557217msh691f40d015487dap1d1080jsnf0efb41250a4',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return await data;
  } catch (error) {
    console.error(error);
  }
}