import {Api} from "./script.js";

let api = new Api;
let receivedData = api.sendData('http://localhost:3000/peliculas');


function showData() {
    
    let seccionPelicula = document.getElementById("peliculas");
    receivedData.then(receivedData => {        
        receivedData.forEach(pelicula => {
            // console.log(pelicula);
             seccionPelicula.innerHTML += `
             <div class="pelicula">
               <span id="title">` + pelicula.nombre + `</span><br/>
               <span id="director">` + pelicula.director + `</span><br/>
               <span id="genre">` + pelicula.clasificacion + `</span><br/>
               <img src="${pelicula.poster}" id="poster"><br/>
               <button data-id="${pelicula.id}" id="edit-${pelicula.id}" data-action="edit">Edit</button>
               <button data-id="${pelicula.id}" id="delete-${pelicula.id}" data-action="delete">Delete</button>
               </div>
               `;
        }); 
    });
}
showData();