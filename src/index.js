/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
/* 
--------------------------------------------------------------------
Forma del curso

const min = 1;
const max = 122;
const random = () => Math.floor(Math.random()*(max - min)) + min;

const createImgeNode = () => {
    const container = document.createElement("div")
    container.className = "p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen)

    return container;
}

const newImagen = createImgeNode();
const mountNode = document.getElementById("images");

const addBtn = document.querySelector("button");
const addImg = () => {
    const newImage = createImgeNode()
    mountNode.append(newImage);
}

addBtn.addEventListener("click", addImg);
*/

//---------------------------------------------------------------------
//Reto con Usando Fetch

const API = 'https://randomfox.ca/floof/'
const containerNode = document.getElementById('images');
const btnAdd = document.querySelector("button");
const btnClean = document.getElementById('clean');

const fetchImage = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const constUrl = responseJSON.image;
    
    const containerImg = document.createElement('div');
    containerImg.className = "p-4";

    const image = document.createElement('img');
    image.src = constUrl;
    image.className = "mx-auto";

    containerImg.appendChild(image);
    containerNode.appendChild(containerImg);
}

btnAdd.addEventListener('click',fetchImage);