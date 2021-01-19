import {Api} from "./script.js";

let api = new Api;
let receivedData = api.sendData('http://localhost:3000/peliculas');


function showData() {
    
    let seccionPelicula = document.getElementById("peliculas");
    receivedData.then(receivedData => {        
        receivedData.forEach(pelicula => {
            // console.log(pelicula);
             seccionPelicula.innerHTML += `
             <div class-"pelicula">
               <span id="title">` + pelicula.nombre + `</span>
               <span id="director">` + pelicula.director + `</span>
               <span id="genre">` + pelicula.genre + `</span>
               <button>Edit</button>
               <button>Delete</button>
               </div>
               `;
        }); 
    });
}
showData();