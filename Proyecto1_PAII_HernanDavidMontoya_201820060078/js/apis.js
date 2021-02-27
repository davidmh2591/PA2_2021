function nuevoMensaje(){
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
    .then(Response => Response.json())
    .then(data=> {
        let elemento = document.getElementById('contenedorMensaje');
        elemento.innerHTML=` <p>${data.value}</p>`;
        console.log(data);

        let arrayMensaje = new Array();
        arrayMensaje.push(data.value);
        contenedorMensaje(arrayMensaje);
    })
    .catch(err => console.log(err))

}