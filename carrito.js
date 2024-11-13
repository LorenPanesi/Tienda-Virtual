const menus = [{nombre:"Inicio", url:"index.html"},
    {nombre:"¿Quienes somos?", url:"quienes.html"},
    {nombre:"Contacto", url:"contacto.html"},
    {nombre:"<span class=material-symbols-outlined>shopping_cart_checkout</span>", url:"carrito.html"},
    ]
    
    function cargarmenu(){
        let enlaces = document.getElementById("ulmenu")
        for (const menu of menus) {
            let lista = document.createElement("li")
            lista.innerHTML=`<a href="${menu.url}">${menu.nombre}</a>`
            enlaces.appendChild(lista);
        }
    }

let productocarritos = JSON.parse(localStorage.getItem("carrito"));

function cargarcarrito() {
    let enlaces = document.getElementById("tablacarrito");
    for(const productocarrito of productocarritos){
    let lista = document.createElement("tr");
    lista.id = `${productocarrito.id}`
    lista.innerHTML = `
    <td><img src="${productocarrito.img}"alt="" width = "50"></td>
        <td>${productocarrito.cantidad}</td>
        <td>${productocarrito.nombre}</td>
        <td>${productocarrito.precio}</td>
        <td>${productocarrito.cantidad * productocarrito.precio}</td><!--Total-->
        <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">Eliminar</button></td>
        `;
        
        
    enlaces.appendChild(lista);
    }
}

cargarcarrito();

function eliminarproducto(id) {
    alert("Desea eliminar este producto: " + id)
    let nodo = document.getElementById(id);
    nodo.remove();

}