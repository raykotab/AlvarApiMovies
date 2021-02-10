

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
        
        const response = await fetch(this.url, {
            method: 'POST',
            body: movieBody,
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => response.text())
            .catch(error => console.log('error', error));
           // return response.json();
        
    }
    
    async deleteData (movieId) {
        
    }
       
};



// var raw = "";

// var requestOptions = {
//   method: 'DELETE',
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://localhost:3000/peliculas/14", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//let movieList = 



    
//a partir de aqui va a controller
    //
   // let movieList=[];
//let arrImg = ["", ];   
// let movieBox = "<div>" + pelicula["nombre"] + "</div>";
// movieList.push(movieBox);
//     }); 
//console.log(movieList);

// }
    


    


   /* displayParticipantes.innerHTML= "";

let longitudArray= arrayParticipantes.length;

for (let i = 0; i < longitudArray; i++) {​​​​

displayParticipantes.innerHTML+= `

<picture class="pictureParticipante" id="display`+ arrayParticipantes[i]+ `">

<img src="./imgWod/`+ arrayParticipantes[i]+ `.png" alt="foto`+ arrayParticipantes[i]+ `"

onerror="this.onerror=null;this.src='./imgWod/generico.png';">

<figcaption>` 
 + arrayParticipantes[i]+ `</figcaption>

</picture>`;

}​​​​

}​​​​*/