

export class Api {

    async sendData(url) {
       const response = await fetch(url, {
           method: 'GET',
           redirect: 'follow',
           headers: {
            'Content-Type': 'application/json'
           },
       });
       return response.json();
        // .then(response => response.json())
        // .then(data => saveData());
        // let savedData = this.saveData();
    }
}


let movieList = 



    
//a partir de aui va a controller
    //
   // let movieList=[];
//let arrImg = ["", ];

    function mostrarPeliculas(data){
        //console.log(data);

        data.forEach(pelicula => {
         // console.log(pelicula);
          seccionPelicula.innerHTML += `
          <div class-"pelicula">
        
            <span id="title">` + pelicula.nombre + `</span>
            <span id="director">` + pelicula.director + `</span>
            <span id="genre">` + pelicula.genre + `</span>
            <button>Edit</button>
            <button>Delete</button>
            </div>
            `;
          
            // let movieBox = "<div>" + pelicula["nombre"] + "</div>";
           // movieList.push(movieBox);
        }); 
        //console.log(movieList);

    }
    


    


   /* displayParticipantes.innerHTML= "";

let longitudArray= arrayParticipantes.length;

for (leti = 0;i < longitudArray;i++) {​​​​

displayParticipantes.innerHTML+= `

<picture class="pictureParticipante" id="display`+ arrayParticipantes[i]+ `">

<img src="./imgWod/`+ arrayParticipantes[i]+ `.png" alt="foto`+ arrayParticipantes[i]+ `"

onerror="this.onerror=null;this.src='./imgWod/generico.png';">

<figcaption>` 
 + arrayParticipantes[i]+ `</figcaption>

</picture>`;

}​​​​

}​​​​*/

//list fetch
