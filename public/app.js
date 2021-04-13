import {Api} from "./apiService.js";
import {CrudMovie} from "./CrudMovie.js";


const api = new Api;
const crudMovie = new CrudMovie(api);
//refactoring idea  createForm function with edit or add as argument

function createForm(formType, movie = undefined){

    const sectionForm = document.getElementById('form');
    
    sectionForm.innerHTML = `
    <form id="addMovies">
        <button type="submit" id="Movie">Add a new one</button>
        <input type="text" id="director" placeholder="director">
        <input type="text" id="title" placeholder="title">
        <input type="text" id="genre" placeholder="genre">
        <input type="url" id="cover" placeholder="image url">
    </form>`
    const addForm = document.getElementById('addMovies');
    console.log(addForm);
    addForm.addEventListener('submit', () => {
    crudMovie.addMovie(event);
    showData();
    sectionForm.innerHTML = "";
    }); 
    
    //else 
    /* <form id="editMovies">
    <button type="submit" id="updateMovie">Update Movie</button>
    <input type="hidden" id="${movie.id}">
    <input type="text" id="newDirector" placeholder="director">
    <input type="text" id="newTitle" placeholder="title">
    <input type="text" id="newGenre" placeholder="genre">
    <input type="url" id="newCover" placeholder="image url">
    </form>*/
    

}

const formShowButton = document.getElementById('addForm'); 
formShowButton.addEventListener('click', () => {
    createForm('addForm');
    
}); 

// const addForm = document.getElementById('addMovies');
// addForm.addEventListener('submit', () => {
//     crudMovie.addMovie(event);
//     showData();
// }); 

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
    
    const receivedData = api.sendData();
    const seccionMovies = document.getElementById("peliculas");
    
    seccionMovies.innerHTML = "";

    receivedData.then(receivedData => {        
        receivedData.forEach(pelicula => {
            
            seccionMovies.innerHTML += `
            <div class="movieCard" id="movieCard-${pelicula.id}">
            <span id="movieTitle">${pelicula.title}</span><br/>
            <span id="movieDirector">${pelicula.director}</span><br/>
            <span id="movieGenre">${pelicula.genre}</span><br/>
            <img src="${pelicula.cover}" id="movieCover"><br/>
            <button type="button" class="editMovie" id="edit-${pelicula.id}" value="${pelicula.id}">Edit</button>
            <button type="button" class="deleteMovie" id="delete-${pelicula.id}" value="${pelicula.id}">Delete</button>
            </div>
            `;
        }); 
    })

    .then(() => {

        const deleteButtons = document.querySelectorAll('.deleteMovie');
        deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            crudMovie.deleteMovie(event)
        });
        })
        const updateButtons = document.querySelectorAll('.editMovie');
        updateButtons.forEach(button => {
        button.addEventListener('click', () => {
           editMovie(event)
        });
        })
    })

}
showData();







