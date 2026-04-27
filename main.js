
let totalPedidos = Number(localStorage.getItem('totalPedidos')) || 0;
let sumatroriaDiaria;
let histoPedidos = JSON.parse(localStorage.getItem('histoPedidos')) || [];
let meta;
let totalResul;



window.onload = function () {
    // const sumatroriaDiaria = document.querySelector('.sumatoria');
    sumatroriaDiaria = document.querySelector('.sumatoria');
    meta = document.querySelector('.inputmenosmeta');
    totalResul = document.querySelector(".totalMenosResul");

    if (sumatroriaDiaria) {
        sumatroriaDiaria.innerHTML = totalPedidos;

    }

    if (meta) {
        const metaGuardada = localStorage.getItem('metaDiaria') || '';
        meta.value = metaGuardada;
    }

    // Dentro de window.onload = function() { ... }

    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'claro') {
        document.body.classList.add('modo-claro');
    }

    cantPedidos()
    metaCantPedidos()
    totalMenosMeta()
}

// esta funcion me dice la cantidad de pedidos que llevo y se refleja mediante la cantidad de elementos en el array
function cantPedidos() {
    const p = document.querySelector('.num_ped')

    p.innerHTML = histoPedidos.length;


}

// esta funcion divide la meta en dinero entre el costo minimo de envio y eso me da la cantidad de pedidos meta
function metaCantPedidos() {

    const span = document.querySelector(".meta_pedidos_cant")
    const divideCant = document.querySelector('.inputmenosmeta').value
    const costoEnvio = 35;
    let intCant = divideCant / costoEnvio;
    const resul = Math.ceil(intCant);
    span.innerHTML = resul;
}

// esta funcion me da la suma de envios por pedido y lo muestra en el html, esta funcion suma los botones de cantidad de envio
function suma(cant) {


    totalPedidos = totalPedidos + cant;
    histoPedidos.push(cant);


    sumatroriaDiaria.innerHTML = totalPedidos;
    // const metaDiaria = document.querySelector(".inputmenosmeta");


    totalMenosMeta();
    cantPedidos();
    metaCantPedidos();
    guardarDatos();

    let pedidosLlevados = histoPedidos.length;
    let objetivo = Number(document.querySelector('.meta_pedidos_cant').innerHTML)
    if (pedidosLlevados >= objetivo && objetivo > 0) {
        alert('Has Logrado la meta!!!')
    }
}
// cons]ole.log(histoPedidos);

// esta funcion muestra el historial
function mostrarHisto() {

    const contenedor = document.getElementById('lista-historial');

    // Si ya se ve, lo ocultamos (Toggle)
    if (contenedor.innerHTML !== "") {
        contenedor.innerHTML = "";
        return;
    }

    // Si no, dibujamos la lista
    let html = "<h3>Entregas Recientes:</h3><ul>";
    histoPedidos.forEach(pedido => {
        // Si el pedido es negativo (resta), lo ponemos rojo, si no, verde
        const color = pedido < 0 ? "red" : "#2ecc71";
        html += `<li style="color: ${color}">$ ${pedido}</li>`;
    });
    html += "</ul>";

    contenedor.innerHTML = html;

}

//esta funcion toma el dato del input meta en dinero y lo resta con la cantidad de envios sumados
function totalMenosMeta() {

    let valorMeta;

    if (meta && meta.value !== '') {
        valorMeta = parseFloat(meta.value);

    }
    else {
        valorMeta = parseFloat(localStorage.getItem('metaDiaria')) || 0;
    }

    if (totalResul) {
        let result = valorMeta - totalPedidos;
        totalResul.innerHTML = result;

        metaCantPedidos();
        cantPedidos();
    }



    // console.log('faltan ' + result);


    guardarDatos();
}


// esta funcion suma el valor capturado en el input de otro monti de envio lo suma a la sumatoria principal de los botones
function otroNume() {
    const otroNum = document.querySelector('.otro_num');
    if (otroNum) {
        let nuevoValor = parseFloat(otroNum.value);

        // let nuevaSuma = nuevoValor + totalPedidos;

        if (!isNaN(nuevoValor)) {

            totalPedidos = totalPedidos + nuevoValor;

            if (sumatroriaDiaria) {
                sumatroriaDiaria.innerHTML = totalPedidos;
            }
            histoPedidos.push(nuevoValor);
            totalMenosMeta();

            otroNum.value = '';

        }

        guardarDatos()
    }
}

// esta funcion resta un numero del input
function restarotroNum() {
    const otroNum = document.querySelector('.otro_num');
    if (otroNum) {
        let newValor = parseFloat(otroNum.value);

        // let nuevaSuma = nuevoValor + totalPedidos;

        if (!isNaN(newValor)) {

            totalPedidos = totalPedidos - newValor;

            if (sumatroriaDiaria) {
                sumatroriaDiaria.innerHTML = totalPedidos;
            }
            histoPedidos.push(-newValor);
            totalMenosMeta();

            otroNum.value = '';

        }

        guardarDatos()
    }
}

// esta funcion borra el ultimo envio capturado
function borrar() {
    if (histoPedidos.length > 0) {
        let deleteLastvalue = histoPedidos.pop()

        totalPedidos = totalPedidos - deleteLastvalue;
        sumatroriaDiaria.innerHTML = totalPedidos
        totalMenosMeta()
    } else {
        alert('no hay mas pedidos que restar')
    }
    guardarDatos();
}


// esta funcion elimina toda la suma usando doble click
function deleteAll() {
    if (confirm("SEGURO QUE QUIERES BORRAR TODA LA SUMA?")) {
        totalPedidos = 0
        histoPedidos = []

        localStorage.removeItem('metaDiaria');

        if (meta) {
            meta.value = '';
        }
        if (sumatroriaDiaria) { sumatroriaDiaria.innerHTML = totalPedidos; }


        guardarDatos();
        totalMenosMeta();
    }

}

//modo claro-obscuro
function cambiarModo() {
    const cuerpo = document.body;

    // .toggle() es como un interruptor: si no tiene la clase, la pone; si la tiene, la quita.
    cuerpo.classList.toggle('modo-claro');

    // Guardamos la preferencia en la "caja fuerte" para que no se resetee
    if (cuerpo.classList.contains('modo-claro')) {
        localStorage.setItem('tema', 'claro');
    } else {
        localStorage.setItem('tema', 'oscuro');
    }
}



// esta funcion guarda los datos por si salgo de la app
function guardarDatos() {
    localStorage.setItem('totalPedidos', totalPedidos);
    localStorage.setItem('histoPedidos', JSON.stringify(histoPedidos));

    if (meta) {
        localStorage.setItem('metaDiaria', meta.value);
    }


    // localStorage.setItem('totalSpanMeta', totalResul);
}




/* 
git add .
git commit -m "Mejora: Estructura de dos páginas, persistencia de meta y función de borrado total"
git push origin main
*/