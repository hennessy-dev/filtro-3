import mostrarDepartamento from "./mostrarDepartamento.js";
import mostrarCiudad from "./mostrarCiudad.js";

const URL = "http://localhost:3000";
const header = new Headers({ "Content-Type": "application/json" });

export async function getDepartamento() {
  let data = await (await fetch(`${URL}/Departamentos`)).json();
  mostrarDepartamento(data);
}

export async function postDepartamento(data) {
  let config = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };

  let departamentos = await (await fetch(`${URL}/Departamentos`, config)).json();
  return console.log(departamentos);
}

export async function deleteDepartamento(tr, id) {
  let data = Object.fromEntries(new FormData(tr.target));

  let config = {
    method: "DELETE",
    headers: header,
    body: JSON.stringify(data),
  };

  let del = await (await fetch(`${URL}/Departamentos/${id}`, config)).json();
  return console.log(del);
}

export async function actualizarDepartamento(data, id) {
  let config = {
    method: "PUT",
    headers: header,
    body: JSON.stringify(data),
  };

  let act = await (await fetch(`${URL}/Departamentos/${id}`, config)).json();
  return console.log(act);
}

export async function getCiudad() {
  let ciudades = await (await fetch(`${URL}/Ciudades`)).json();
  let departamentos = await (await fetch(`${URL}/Departamentos`)).json();
  mostrarCiudad(ciudades, departamentos);

  const selectDepartamentos = document.getElementById("departamentoId");
  const selectDepartamentosModal = document.getElementById("departamentoIdCiudad");

  departamentos.forEach((departamento) => {
    const option = document.createElement("option");
    option.classList.add('text-light')
    option.value = departamento.id;
    option.textContent = departamento.departamento;
    selectDepartamentos.appendChild(option);

    const optionModal = document.createElement("option");
    optionModal.value = departamento.id;
    optionModal.textContent = departamento.departamento;
    selectDepartamentosModal.appendChild(optionModal);
  });
}

export async function postCiudad(data) {
  let config = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };

  let ciudades = await (await fetch(`${URL}/Ciudades`, config)).json();
}

export async function deleteCiudad(tr, id) {
  let data = Object.fromEntries(new FormData(tr.target));

  let config = {
    method: "DELETE",
    headers: header,
    body: JSON.stringify(data),
  };

  let del = await (await fetch(`${URL}/Ciudades/${id}`, config)).json();
}

export async function actualizarCiudad(data, id) {
  data.departamentoId = parseInt(data.departamentoId);
  let config = {
    method: "PUT",
    headers: header,
    body: JSON.stringify(data),
  };

  let act = await (await fetch(`${URL}/Ciudades/${id}`, config)).json();
}

export async function climaCiudad(ciudad){
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
