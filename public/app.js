import {Api} from "./script.js";

let api = new Api;
let receivedData = api.sendData();
const addForm = document.getElementById('addMovies');
addForm.addEventListener('submit', addMovie); 
console.log(document.querySelector('#director'));
function showData() {
    
    let seccionPelicula = document.getElementById("peliculas");
    receivedData.then(receivedData => {        
        receivedData.forEach(pelicula => {
            // console.log(pelicula);
             seccionPelicula.innerHTML += `
             <div class="pelicula">
               <span id="moviaTitle">` + pelicula.nombre + `</span><br/>
               <span id="movieDirector">` + pelicula.director + `</span><br/>
               <span id="MovieGenre">` + pelicula.clasificacion + `</span><br/>
               <img src="${pelicula.poster}" id="moviePoster"><br/>
               <button type="button" id="${pelicula.id}" onclick="editMovie(${pelicula.id})">Edit</button>
               <button type="button" id="${pelicula.id}" onclick="deleteMovie(${pelicula.id})">Delete</button>
               </div>
               `;
        }); 
    });
}
showData();

function addMovie(event) {
    event.preventDefault();
    
    
    const movie = {
        directorInput: document.querySelector('#director').value,
        titleInput: document.querySelector('#title').value,
        genreInput: document.querySelector('#genre').value,
        coverInput: document.querySelector('#poster').value,
    }
    console.log(movie);
    api.postMovieData (movie);
}