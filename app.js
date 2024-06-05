import { crearMenu } from "./scripts/menu.js";

const $menuEmpanadas = document.querySelector('#menu-contenedor');
const API_EMPANADAS = 'https://6310d48c826b98071a4bd630.mockapi.io/empanadas';

crearMenu(API_EMPANADAS);
