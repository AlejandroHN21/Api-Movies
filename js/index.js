
const btn = document.querySelector("#boton");
const buscador = document.querySelector("#buscar");
// const noSearch = document.querySelector(".error");

const img = document.querySelector(".img");
const h2 = document.querySelector(".h2");
const two = document.querySelector(".two");
const p = document.querySelector(".p");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");


btn.addEventListener("click",()=>{

    const Api = async ()=>{      
        try{    
            const llamada = await fetch(`http://www.omdbapi.com/?apikey=a8021578&t=${buscador.value}`);
            const respuesta = await llamada.json();
            console.log(respuesta);      
            if(respuesta){    
                img.src = `${respuesta.Poster}`;
                h2.textContent = `Tituto: ${respuesta.Title}`;
                two.textContent = `Lanzamiento: ${respuesta.Year}`;
                p.textContent = `Actores: ${respuesta.Actors}`;
                p2.textContent = `Director: ${respuesta.Director}`;
                p3.textContent = `Duración: ${respuesta.Runtime}`;
            }

            if(respuesta.Title == undefined){
                img.src = ``; h2.textContent = ``; two.textContent = ``;
                p.textContent = ``; p2.textContent = ``; p3.textContent = ``;

                alert('No se encuentra lo que busca, trate de escribir correctamente las películas y series deben escribirse en ingles ');
            }
        }    
        catch{
        alert("Error en la conexion con la base de datos "); 
        }
    
}
    Api();  

});