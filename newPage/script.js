function calcular(){
    var pago = document.getElementById('valor').value;
    
    pago = 200 * pago;

    document.getElementById('total').innerHTML = pago;
}

const btnResumenClick = document.getElementById('botonResumen');
btnResumenClick.addEventListener("click",calcular);