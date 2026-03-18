


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



function suma(cant) {


    totalPedidos = totalPedidos + cant;
    histoPedidos.push(cant);

    sumatroriaDiaria.innerHTML = totalPedidos;

    const metaDiaria = document.querySelector(".inputmenosmeta");

    totalMenosMeta();
}
console.log(histoPedidos);

function totalMenosMeta() {
    const meta = document.querySelector('.inputmenosmeta');

    const totalResul = document.querySelector(".totalMenosResul");

    let valorMeta = parseFloat(meta.value);


    let result = valorMeta - totalPedidos;
    totalResul.innerHTML = result;

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

function borrar(){
    if (histoPedidos.length > 0){
        let deleteLastvalue = histoPedidos.pop()

        totalPedidos =   totalPedidos - deleteLastvalue;
        sumatroriaDiaria.innerHTML = totalPedidos
        totalMenosMeta()
    }else{
        alert('no hay mas pedidos que restar')
    }
}

function deleteAll(){
    if (confirm("SEGURO QUE QUIERES BORRAR TODA LA SUMA?")){
        totalPedidos = 0 
        histoPedidos = []

        sumatroriaDiaria.innerHTML = totalPedidos;
        totalMenosMeta();
    }
}
