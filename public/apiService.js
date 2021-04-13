

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

    async getOneData(movieId) {
        const response = await fetch(`${this.url}/${movieId}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
             'id': 'movieId',   
             'Content-Type': 'application/json'
            },
        });
        //console.log('geoneData tu!', response.json());
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

    async updateData (movieId, movieData) {
        var myHeaders = new Headers();
        myHeaders.append("id", "movieId");
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            'director': movieData.directorInput,
            'title': movieData.titleInput,
            'genre': movieData.genreInput,
            'cover': movieData.coverInput,
        });
        
        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        await fetch(`http://localhost:3000/peliculas/${movieId}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log("esto es el result", result))
        .catch(error => console.log('error', error));
    }
       
};





