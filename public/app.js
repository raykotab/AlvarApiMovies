import {Api} from "./apiService.js";
import {CrudMovie} from "./CrudMovie.js";


const api = new Api;
const crudMovie = new CrudMovie(api);

const addForm = document.getElementById('addMovies');
addForm.addEventListener('submit', () => {
    crudMovie.addMovie(event);
    showData();
}); 
const editForm = document.getElementById('editMovies');

editForm.addEventListener('submit', () => {
    crudMovie.updateMovie(event);
    showData();
}); 



async function editMovie(event) {

    const oldMovieId = event.target.value;
    const oldData = await api.getOneData(oldMovieId);

   
    const addMovieForm = document.getElementById("addMovies");
    const editMovieForm = document.getElementById("editMovies");
    addMovieForm.style.display = "none";
    editMovieForm.style.display="block";
    console.log(oldData.id);
    const oldDirector = document.getElementById("newDirector");
    oldDirector.value = oldData.director;
    const oldTitle = document.getElementById("newTitle");
    oldTitle.value = oldData.title;
    const oldGenre = document.getElementById("newGenre");
    oldGenre.value = oldData.genre;
    const oldCover = document.getElementById("newCover");
    oldCover.value = oldData.cover;
    const movieId = document.getElementById("movieId");
    movieId.value = oldData.id;
}

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
            <button type="button" class="editMovie" id="edit-${pelicula.id}" value="${pelicula.id}">Edit</button>
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
        let updateButtons = document.querySelectorAll('.editMovie');
        updateButtons.forEach(button => {
        button.addEventListener('click', () => {
           editMovie(event)
        });
        })
    })

}
showData();
export default showData;







