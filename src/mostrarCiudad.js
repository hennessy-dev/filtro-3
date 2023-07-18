export default function mostrarCiudad(ciudades, departamentos) {
  let tbodyCiudades = document.querySelector("#tbodyCiudades");
  tbodyCiudades.innerHTML = "";

  ciudades.forEach((ciudad) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", `${ciudad.id}`);
    tr.setAttribute("class", "tr");
    tr.innerHTML = `
        <td>${ciudad.id}</td>
        <td>${ciudad.nomCiudad}</td>
        <td>${getDepartamentoNombre(ciudad.departamentoId, departamentos)}</td>
        <td>
        <input type="submit" data-accion="VerClima" value="ver Clima" class="btn btn-outline-success py-1 me-3">
        <input type="submit" data-accion="EliminarCiudad" value="Eliminar" class="btn btn-outline-danger py-1 me-3">
        <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificarCiudad" data-accion="ActualizarCiudad" value="Actualizar" class="py-1 btn btn-outline-warning">        
        </td>
      `;

    tbodyCiudades.appendChild(tr);
  });
}

function getDepartamentoNombre(departamentoId, departamentos) {
  const departamento = departamentos.find((dep) => dep.id === departamentoId);
  return departamento.nomDepartamento;
}
