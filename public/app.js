import {Api} from "./script.js";
import {CrudMovie} from "./CrudMovie.js";


const api = new Api;
const crudMovie = new CrudMovie;

const addForm = document.getElementById('addMovies');
addForm.addEventListener('submit', addMovie); 


function showData() {
    
    let receivedData = api.sendData();
    let seccionMovies = document.getElementById("peliculas");
    
    seccionMovies.innerHTML = "";
    receivedData.then(receivedData => {        
        receivedData.forEach(pelicula => {
            
            seccionMovies.innerHTML += `
            <div class="movieCard">
            <span id="moviaTitle">` + pelicula.title + `</span><br/>
            <span id="movieDirector">` + pelicula.director + `</span><br/>
            <span id="movieGenre">` + pelicula.genre + `</span><br/>
            <img src="${pelicula.cover}" id="movieCover"><br/>
            <button type="button" id="btn-edit" onclick="editMovie(${pelicula.id})">Edit</button>
            <button type="button" class="deleteMovie" id="delete-${pelicula.id}" value="${pelicula.id}">Delete</button>
            </div>
            `;
        }); 
    });
}
showData();

let deleteButtons = document.querySelectorAll('.deleteMovie');
console.log(deleteButtons);


deleteButtons.forEach(button => {

    button.addEventListener('click', () => {
        console.log('dsiliiiiiit');
        //crudMovie.deleteMovie(e)
    });
});

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
};


