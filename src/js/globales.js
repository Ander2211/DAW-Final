/*
 * JavaScript de la pagina index
 */

window.onload = init;

let menuVertical = document.getElementById("barraMenu");
let barraNav = document.getElementById("barraNav");
let menuSec = document.getElementsByClassName("segundo-nivel");
let subElem = document.getElementsByClassName("subElemento");
let btnInicio = document.getElementById("btnInicio");
const infoCard = document.getElementById('infoCard');
//const cardImg = document.getElementById('cardImg');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');
const cardDesc2 = document.getElementById('cardDesc2');
const cardDesc3 = document.getElementById('cardDesc3');
const cardDesc4 = document.getElementById('cardDesc4');

function init() {
    ajustarMenu();
    window.addEventListener("resize", ajustarMenu);
    infoCard.style.display = 'none';

    document.querySelectorAll('.departamento').forEach(depto => {
        depto.addEventListener('mouseenter', (event) => {
            const nombre = event.target.getAttribute('data-nombre');
            const imgSrc = event.target.getAttribute('data-img');
            const descripcion = event.target.getAttribute('data-descripcion');
            const descripcion2 = event.target.getAttribute('data-descripcion2');
            const descripcion3 = event.target.getAttribute('data-descripcion3');
            const descripcion4 = event.target.getAttribute('data-descripcion4');

            cardTitle.textContent = nombre;
            //cardImg.src = imgSrc;
            cardDesc.textContent = descripcion;
            cardDesc2.textContent = descripcion2;
            cardDesc3.textContent = descripcion3;
            cardDesc4.textContent = descripcion4;

            infoCard.style.display = 'block';
            const instance = Popper.createPopper(event.target, infoCard, {
                placement: 'top'
            });
        });
        depto.addEventListener('mouseleave', () => {
            infoCard.style.display = 'none';
        });
    });
}

function ajustarMenu() {
    if (window.innerWidth <= 1000) {
        menuVertical.style.height = window.innerHeight - barraNav.offsetHeight + "px";
        for (let i = 0; i < menuSec.length; i++) {
            menuSec[i].style.width = "";
        }
        for (let i = 0; i < subElem.length; i++) {
            subElem[i].style.width = "";
        }
    }
    else {
        menuVertical.style.height = 48 + "px";
        for (let i = 0; i < menuSec.length; i++) {
            menuSec[i].style.width = btnInicio.offsetWidth + "px";
        }
        for (let i = 0; i < subElem.length; i++) {
            subElem[i].style.width = btnInicio.offsetWidth + "px";
        }
    }
}





//pagina de creadores
document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: 1, title1: 'Bryan Peña - Investigador / Desarrollador', image1Src: 'Bryan.jpg' },
        { id: 2, title1: 'Guillermo Hernández - Investigador / Desarrollador', image1Src: 'img/integrantes/Guille.jpg' },
        { id: 3, title1: 'Yassir Meléndez - Investigador / Desarrollador', image1Src: 'img/integrantes/Yassir.jpg' },
        { id: 4, title1: 'Anderson Hernández - Investigador / Desarrollador', image1Src: 'img/integrantes/Anderson.jpg' },
        { id: 5, title1: 'Daniel Flores - Investigador / Desarrollador', image1Src: 'img/integrantes/Daniel.jpg' },
    ];

    const container = document.getElementById("sections-container");

    sections.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "grid grid-cols-3 gap-4 mb-12";

        const imgDiv = document.createElement("div");
        imgDiv.className = "border-2 border-gray-400 rounded-lg p-2 flex items-center justify-center h-40 md:h-60 col-span-1 ";
        const imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        const img = document.createElement("img");
        img.src = section.image1Src || "/placeholder.svg";
        img.alt = `Imagen para sección ${section.id}`;
        imgContainer.appendChild(img);
        imgDiv.appendChild(imgContainer);

        const textDiv = document.createElement("div");
        textDiv.className = "border-2 border-gray-400 rounded-lg p-2 flex items-center justify-center h-40 md:h-60 col-span-2";
        const textSpan = document.createElement("span");
        textSpan.className = "text-xl md:text-2xl";
        textSpan.textContent = section.title1;
        textDiv.appendChild(textSpan);

        if (section.id % 2 === 0) {
            sectionDiv.appendChild(imgDiv);
            sectionDiv.appendChild(textDiv);
        } else {
            sectionDiv.appendChild(textDiv);
            sectionDiv.appendChild(imgDiv);
        }

        container.appendChild(sectionDiv);
    });
});




