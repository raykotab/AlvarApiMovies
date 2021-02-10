import {Api} from "./script.js";

let api = new Api;
const addForm = document.getElementById('addMovies');
addForm.addEventListener('submit', addMovie); 
//console.log(document.querySelector('#director'));
//const showData = document.addEventListener('load', showData);

function showData() {

    let receivedData = api.sendData();
    let seccionMovies = document.getElementById("peliculas");
    console.log(receivedData);
    seccionMovies.innerHTML = "";
    receivedData.then(receivedData => {        
        receivedData.forEach(pelicula => {
            // console.log(pelicula);
             seccionMovies.innerHTML += `
             <div class="movieCard">
               <span id="moviaTitle">` + pelicula.title + `</span><br/>
               <span id="movieDirector">` + pelicula.director + `</span><br/>
               <span id="movieGenre">` + pelicula.genre + `</span><br/>
               <img src="${pelicula.cover}" id="movieCover"><br/>
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
        coverInput: document.querySelector('#cover').value,
    }
    api.postMovieData (movie)
    showData();
}

function deleteMovie(movieId) {
        
        document.getElementById('#delete-${pelicula.id}').remove();

}; 