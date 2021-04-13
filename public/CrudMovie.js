
export class CrudMovie {

  constructor (api) {
      this.api = api;
  }
       
    addMovie(event) {

        event.preventDefault();   
       // console.log('estrind add');
        const movie = {
            directorInput: document.querySelector('#director').value,
            titleInput: document.querySelector('#title').value,
            genreInput: document.querySelector('#genre').value,
            coverInput: document.querySelector('#cover').value,
        }
        this.api.postMovieData(movie)
        
    };

    deleteMovie(evt) {  
        const movieId = evt.target.value;
        const movieToDelete = document.querySelector(`#movieCard-${movieId}`)
        //console.log(this.api);
        this.api.deleteData(movieId);
        movieToDelete.remove();
        
    }; 

    updateMovie(event) {

        event.preventDefault();   
        const movieId = document.querySelector('#movieId').value;
        const movie = {
            directorInput: document.querySelector('#newDirector').value,
            titleInput: document.querySelector('#newTitle').value,
            genreInput: document.querySelector('#newGenre').value,
            coverInput: document.querySelector('#newCover').value,
        }
        this.api.updateData(movieId, movie)
        console.log("crud update", movieId);
        
    };
}