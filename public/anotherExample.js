"use strict";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    getAllMovies();
  },
  false
);

let movieCard = document.getElementById("movies");
const movieForm = document.querySelector("#movie-form");
const editForm = document.getElementById("edit");
const newMovieForm = document.getElementById("addMovieForm");
const addMovieButton = document.getElementById("addMovie");

addMovieButton.addEventListener("click", () => { printMovieForm() });

function printMovieForm(){
  const body = document.createElement("div");
  body.className = "form-group"
  body.style.cssText = "display: flex; flex-direction: column; max-width:20rem";

  newMovieForm.appendChild(body);
  const editNombre = document.createElement("input");
  editNombre.className = "form-control";
  editNombre.setAttribute("placeholder", "nombre");
  editNombre.setAttribute("id", "nombre");
  body.appendChild(editNombre);

  const editDirector = document.createElement("input");
  editDirector.className = "form-control";
  editDirector.setAttribute("placeholder", "director");
  editDirector.setAttribute("id", "director");
  body.appendChild(editDirector);

  const editImage = document.createElement("input");
  editImage.className = "form-control";
  editImage.setAttribute("placeholder", "image");
  editImage.setAttribute("id", "image");
  body.appendChild(editImage);

  const editClasificacion = document.createElement("input");
  editClasificacion.className = "form-control";
  editClasificacion.setAttribute("placeholder", "clasificacion");
  editClasificacion.setAttribute("id", "clasificacion");
  body.appendChild(editClasificacion);

  const addButton = document.createElement("button");
  addButton.className = "btn btn-light";
  addButton.innerHTML = "Done";
  addButton.setAttribute("type", "submit");
  body.appendChild(addButton);

  const cancelButton = document.createElement("button");
  cancelButton.className = "btn btn-dark";
  cancelButton.innerHTML = "Cancel";
  cancelButton.addEventListener("click", () => {
    body.innerHTML = "";
  });
  body.appendChild(cancelButton);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "btn-group mr-2 form-group btn-div";
  buttonDiv.appendChild(cancelButton);
  buttonDiv.appendChild(addButton);

  body.appendChild(buttonDiv);

  newMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  let formData = {
    nombre: newMovieForm.querySelector("#nombre").value,
    director: newMovieForm.querySelector("#director").value,
    image: newMovieForm.querySelector("#image").value,
    clasificacion: newMovieForm.querySelector("#clasificacion").value,
  };

  fetch("http://localhost:3000/peliculas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData }),
  })
    .then((response) => response.json())
    .then((movie) => {
      printMovie(movie);
    });
});


  

}

function printMovie(movie) {
  const cardMovie = document.createElement("div");
  cardMovie.className = "mov";
  cardMovie.style.cssText = "margin: 0.5vw;width: 18rem;";

  const idCard = document.createElement("p");
  idCard.innerHTML = movie.id;
  idCard.className = "homeid";
  cardMovie.appendChild(idCard);

  const clasificacionCard = document.createElement("div");
  clasificacionCard.innerHTML = movie.clasificacion;
  clasificacionCard.className = "homeclas";
  cardMovie.appendChild(clasificacionCard);

  const nombreCard = document.createElement("h5");
  nombreCard.innerHTML = movie.nombre;
  nombreCard.className = "homedirector";
  cardMovie.appendChild(nombreCard);

  const directorCard = document.createElement("p");
  directorCard.innerHTML = movie.director;
  directorCard.className = "hometitle";
  cardMovie.appendChild(directorCard);

  const imagenCard = document.createElement("img");
  imagenCard.src = movie.image;
  imagenCard.innerHTML = movie.image;
  imagenCard.style.cssText = "width:10em";
  cardMovie.appendChild(imagenCard);

  const buttonDelete = document.createElement("button");
  buttonDelete.className = "btn btn-dark";
  buttonDelete.setAttribute("type", "delete");
  buttonDelete.addEventListener("click", () => {
    deleteMovie(movie);
  });
  buttonDelete.innerHTML = "Delete";

  const buttonEdit = document.createElement("button");
  buttonEdit.className = "btn btn-secondary";
  buttonEdit.addEventListener("click", () => {
    editMovie(movie);
    window.scrollTo(0, 200);
  });
  buttonEdit.innerHTML = "Edit";

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "btn-group mr-2 homebutton";
  buttonDiv.appendChild(buttonEdit);
  buttonDiv.appendChild(buttonDelete);
  cardMovie.appendChild(buttonDiv);

  movieCard.appendChild(cardMovie);
  console.log(movie);
}

function getAllMovies() {
  fetch("http://localhost:3000/peliculas")
    .then((response) => response.json())
    .then((movies) => {
      movies.forEach((movie) => {
        printMovie(movie);
      });
    });
}



function deleteMovie(movie) {
  let id = movie.id;
  fetch(`http://localhost:3000/peliculas/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => clearAllMovies())
    .then(() => getAllMovies());
}

function clearAllMovies() {
  movieCard.innerHTML = "";
}

function editMovie(movie) {
  const body = document.createElement("div");
  body.className = "form-group"
  body.style.cssText = "display: flex; flex-direction: column; max-width:20rem";

  const editTitle = document.createElement("h6");
  editTitle.innerHTML = "Edit Movie";
  editTitle.style.cssText = "color: #fff"
  body.appendChild(editTitle);

  const idCard = document.createElement("p");
  idCard.innerHTML = movie.id;
  idCard.className = "card-title idEdit";
  body.appendChild(idCard);

  editForm.appendChild(body);
  const editNombre = document.createElement("input");
  editNombre.className = "form-control";
  editNombre.setAttribute("value", `${movie.nombre}`);
  editNombre.setAttribute("id", "nombreId");
  body.appendChild(editNombre);

  const editDirector = document.createElement("input");
  editDirector.className = "form-control";
  editDirector.setAttribute("value", `${movie.director}`);
  editDirector.setAttribute("id", "directorId");
  body.appendChild(editDirector);

  const editImage = document.createElement("input");
  editImage.className = "form-control";
  editImage.setAttribute("value", `${movie.image}`);
  editImage.setAttribute("id", "imageId");
  body.appendChild(editImage);

  const editClasificacion = document.createElement("input");
  editClasificacion.className = "form-control";
  editClasificacion.setAttribute("value", `${movie.clasificacion}`);
  editClasificacion.setAttribute("id", "clasificacionId");
  body.appendChild(editClasificacion);

  const editButton = document.createElement("button");
  editButton.className = "btn btn-light";
  editButton.innerHTML = "Edit";
  editButton.setAttribute("type", "submit");
  body.appendChild(editButton);

  const cancelButton = document.createElement("button");
  cancelButton.className = "btn btn-dark";
  cancelButton.innerHTML = "Cancel";
  cancelButton.addEventListener("click", () => {
    body.innerHTML = "";
  });
  body.appendChild(cancelButton);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "btn-group mr-2 form-group btn-div";
  buttonDiv.appendChild(cancelButton);
  buttonDiv.appendChild(editButton);

  body.appendChild(buttonDiv);

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let editData = {
      id: idCard.innerHTML,
      nombre: editNombre.value,
      director: editDirector.value,
      image: editImage.value,
      clasificacion: editClasificacion.value,
    };
    updateMovie(editData);
  });
}

function updateMovie(editData) {
  fetch(`http://localhost:3000/peliculas/${editData.id}`, {
    method: "PUT",
    body: JSON.stringify({ ...editData }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => clearAllMovies())
    .then(() => getAllMovies());
}