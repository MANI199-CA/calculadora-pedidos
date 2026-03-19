


// function sumaTresCinco (){
//     const sumatoria = document.querySelector('.sumatoria');
//     totalPedidos= totalPedidos + 35;
//     sumatoria.innerHTML = totalPedidos;
// }

// function sumaCuatroCero (){
//     const sumatoria = document.querySelector('.sumatoria');
//     totalPedidos= totalPedidos + 40;
//     sumatoria.innerHTML = totalPedidos;
// }

// function sumaCuatroCinco (){
//     const sumatoria = document.querySelector('.sumatoria');
//     totalPedidos= totalPedidos + 45;
//     sumatoria.innerHTML = totalPedidos;
// }

// function sumaCincoCero (){
//     const sumatoria = document.querySelector('.sumatoria');
//     totalPedidos= totalPedidos + 50;
//     sumatoria.innerHTML = totalPedidos;
// }


let totalPedidos = 0;
const sumatroriaDiaria = document.querySelector('.sumatoria');
let histoPedidos = [];



function cantPedidos() {
    const p = document.querySelector('.num_ped')

    p.innerHTML = histoPedidos.length;

    
}


function metaCantPedidos() {

    const span = document.querySelector(".meta_pedidos_cant")
    const divideCant = document.querySelector('.inputmenosmeta').value
    const costoEnvio = 35;
    let intCant = divideCant / costoEnvio;
    const resul = Math.ceil(intCant);
    span.innerHTML = resul;
}

function suma(cant) {
    

    totalPedidos = totalPedidos + cant;
    histoPedidos.push(cant);

    
    sumatroriaDiaria.innerHTML = totalPedidos;
    const metaDiaria = document.querySelector(".inputmenosmeta");

    
    totalMenosMeta();
    cantPedidos();
    metaCantPedidos();

    let pedidosLlevados= histoPedidos.length;
    let objetivo = Number(document.querySelector('.meta_pedidos_cant').innerHTML)
    if (pedidosLlevados >= objetivo && objetivo>0){
        alert('Has Logrado la meta!!!')
    }
}
console.log(histoPedidos);

function totalMenosMeta() {
    const meta = document.querySelector('.inputmenosmeta');

    const totalResul = document.querySelector(".totalMenosResul");

    let valorMeta = parseFloat(meta.value);


    let result = valorMeta - totalPedidos;
    totalResul.innerHTML = result;

    cantPedidos();
    metaCantPedidos();
    console.log('faltan ' + result);

}



function otroNume() {
    const otroNum = document.querySelector('.otro_num');

    let nuevoValor = parseFloat(otroNum.value);

    // let nuevaSuma = nuevoValor + totalPedidos;

    if (!isNaN(nuevoValor)) {
        totalPedidos = totalPedidos + nuevoValor;
        sumatroriaDiaria.innerHTML = totalPedidos;

        histoPedidos.push(nuevoValor);
        totalMenosMeta();

        otroNum.value = '';

    }


}

function borrar() {
    if (histoPedidos.length > 0) {
        let deleteLastvalue = histoPedidos.pop()

        totalPedidos = totalPedidos - deleteLastvalue;
        sumatroriaDiaria.innerHTML = totalPedidos
        totalMenosMeta()
    } else {
        alert('no hay mas pedidos que restar')
    }
}

function deleteAll() {
    if (confirm("SEGURO QUE QUIERES BORRAR TODA LA SUMA?")) {
        totalPedidos = 0
        histoPedidos = []

        sumatroriaDiaria.innerHTML = totalPedidos;
        totalMenosMeta();
    }
}

