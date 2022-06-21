document.addEventListener('DOMContentLoaded', ()=> {
    let datosStorage = JSON.parse(localStorage.getItem('usuarios')) ;
    if(!datosStorage == '') {
        mostrarLista(datosStorage[0]);
        mostrarLista(datosStorage[1]);
    }else {
        consultarAPI();
    }
})

function consultarAPI() {
    // Consultar la API
let url = `https://reqres.in/api/users?page=1`,
    url2 = `https://reqres.in/api/users?page=2`;

  Promise.all([
    fetch(url).then(resp => resp.json()),
    fetch(url2).then(resp => resp.json()),
  ]).then(datos => {
    mostrarLista(datos[0]);
    mostrarLista(datos[1]);

    //Agregar la data al Storage
    sincronizarStorage(datos);
  })

}

function mostrarLista(usuarios) {
    let container = document.querySelector(' .card-container')
    usuarios.data.forEach(usuario => {
        container.innerHTML += /*html*/`
        <div class="wrapper">
     <div class="img-area">
       <div class="inner-area">
       <img src="${usuario.avatar}" class="img-avatar" alt="">
       </div>
     </div>

     <div class="name">${usuario.first_name} ${usuario.last_name}</div>
     <div class="about"> ${usuario.email}
     </div>
     
     <div class="buttons">
       <button class="hero__cta">Información</button>
     </div>
   </div>
        `
    }); 
}

// Sincronizar LocalStorage
function sincronizarStorage(datos) {
    localStorage.setItem('usuarios', JSON.stringify(datos));
}



