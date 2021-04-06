import {Api} from "./apiService.js";
import {CrudMovie} from "./CrudMovie.js";


const api = new Api;
const crudMovie = new CrudMovie(api);

const addForm = document.getElementById('addMovies');
addForm.addEventListener('submit', () => {
    crudMovie.addMovie(event);
    showData();
}); 

//console.log(crudMovie);

function showData() {
    
    let receivedData = api.sendData();
    let seccionMovies = document.getElementById("peliculas");
    
    seccionMovies.innerHTML = "";
    receivedData.then(receivedData => {        
        receivedData.forEach(pelicula => {
            
            seccionMovies.innerHTML += `
            <div class="movieCard" id="movieCard-${pelicula.id}">
            <span id="movieTitle">` + pelicula.title + `</span><br/>
            <span id="movieDirector">` + pelicula.director + `</span><br/>
            <span id="movieGenre">` + pelicula.genre + `</span><br/>
            <img src="${pelicula.cover}" id="movieCover"><br/>
            <button type="button" id="btn-edit" onclick="editMovie(${pelicula.id})">Edit</button>
            <button type="button" class="deleteMovie" id="delete-${pelicula.id}" value="${pelicula.id}">Delete</button>
            </div>
            `;
        }); 
    })

    .then(() => {

        let deleteButtons = document.querySelectorAll('.deleteMovie');
        deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            crudMovie.deleteMovie(event)
        });
        })
    });
}
showData();
export default showData;





