export default function mostrarDepartamento(data) {
  let tbodyDepartamentos = document.querySelector("#tbodyDepartamentos");

  tbodyDepartamentos.innerHTML = "";

  data.forEach((departamento) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", `${departamento.id}`);
    tr.setAttribute("class", "tr");
    tr.innerHTML = `
    <td>${departamento.id}</td>
    <td>${departamento.nomDepartamento}</td>
    <td>
    <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn btn-outline-danger py-1 me-3">
    <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar" data-accion="Actualizar" value="Actualizar" class="btn btn-outline-warning py-1">
    </td>
    `;

    tbodyDepartamentos.appendChild(tr);
  });
}
