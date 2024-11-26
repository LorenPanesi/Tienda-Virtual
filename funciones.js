const menus = [{nombre:"Inicio", url:"index.html"},
    {nombre:"¿Quienes somos?", url:""},
    {nombre:"Contacto", url:"contacto.html"}
    ]
    
    function cargarmenu(){
        let enlaces = document.getElementById("ulmenu")
        for (const menu of menus) {
            let lista = document.createElement("li")
            lista.innerHTML=`<a href="${menu.url}">${menu.nombre}</a>`
            enlaces.appendChild(lista);
            
        }
    }
    
    cargarmenu();
    
    const productos = [{nombre:"Botines", precio:"190000", img:"imagenes/botines.jpeg", id: "1"},
        {nombre:"Remera", precio:"13000", img:"imagenes/remera.jpg", id:"2"},
        {nombre:"Short", precio:"11000", img:"imagenes/short.jpg", id:"3"},
        {nombre:"Botines", precio:"82000", img:"imagenes/papifutbol.jpg", id:"4"},
        {nombre:"Zapatillas", precio:"69000", img:"imagenes/zapas-puma.jpg", id:"5"},
        {nombre:"Zapatillas", precio:"67000", img:"imagenes/zapas-puma2.jpg", id:"6"},
        {nombre:"Zapatillas", precio:"79999", img:"imagenes/zapas-nike.jpg", id:"7"},
        {nombre:"Medias", precio:"2500", img:"imagenes/medias.jpeg", id:"8"}

    ]
    
    function cargarproductos() {
        let ventas = document.getElementById("boxproducto");
        for (const producto of productos) {
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<div class="boxproducto">
                <h3>${producto.nombre}</h3>
                <img src="${producto.img}" alt="" width="100"> 
                <p>$${producto.precio}</p>
                <button onclick="verdetalle('${producto.id}')">detalle</button>
                </div>`;
            ventas.appendChild(contenedor);
        }
    }
    
    cargarproductos();
    
    function verdetalle(idproducto){
        const buscarproducto=productos.find(producto => producto.id === (idproducto));
        const enJSON =JSON.stringify(buscarproducto);
        localStorage.setItem("detalleproducto", enJSON)
        window,location.href= "detalle.html";
    
    }
