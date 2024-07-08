let contenedor = document.getElementById("contenedorMovies")

function estructuraCard(foto, titulo, eslogan, descripcion){
    let card = `<article class = "flex flex-col items-center border-2 border-solid border-gray bg-gray-700 w-80 h-fit p-4 gap-2 rounded-xl">
                 <img class = "w-52 border-4 border-solid border-green-800 rounded-xl" src="${foto}" alt="${titulo}">
                 <span class = "font-bold" >${titulo}</span>
                 <span class = "font-bold">${eslogan}</span>
                 <p>${descripcion}</p>
               </article>`
    return card
}

function crearCard(arrayPreexistente){
    let nuevoArray = []
    for (let i = 0; i < arrayPreexistente.length; i++) {
        nuevoArray[i] = estructuraCard(arrayPreexistente[i].image, arrayPreexistente[i].title, arrayPreexistente[i].tagline, arrayPreexistente[i].overview)
    }
    return nuevoArray
}

contenedor.innerHTML = crearCard(movies).join(" ")
