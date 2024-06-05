const $menuEmpanadas = document.querySelector('#menu-contenedor');
const API_URL = 'https://6310d48c826b98071a4bd630.mockapi.io/empanadas';

export const crearMenu = async (url) => {

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    data.empanadas.forEach(empanada => {
        const contenedor = document.createElement('div');
        const nombre = document.createElement('p');
        const descripcion = document.createElement('p');
    
        nombre.textContent = empanada.sabor;
        descripcion.textContent = `(${empanada.descripcion})`;
    
        contenedor.append(nombre, descripcion);
        $menuEmpanadas.appendChild(contenedor);
    });
};

