

export class Api {

    constructor() {
    this.url = 'http://localhost:3000/peliculas';
    
    }

    async sendData() {
       const response = await fetch(this.url, {
           method: 'GET',
           redirect: 'follow',
           headers: {
            'Content-Type': 'application/json'
           },
       });
       return response.json();
        
    }

    async postMovieData (movie) {
          
        let movieBody = JSON.stringify({
            'director': movie.directorInput,
            'title': movie.titleInput,
            'genre': movie.genreInput,
            'cover': movie.coverInput,
        })
        
         await fetch(this.url, {
            method: 'POST',
            body: movieBody,
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => response.text())
            .catch(error => console.log('error', error));
           
        
    }
    
    deleteData (movieId) {

        const url = `${this.url}/${movieId}`;
        var myHeaders = new Headers();
        myHeaders.append("id", movieId);

        var raw = "";

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
       
};





