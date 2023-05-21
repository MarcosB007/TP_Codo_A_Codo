function calcular(){
    var pago = document.getElementById('valor').value;
    
    pago = 200 * pago;

    document.getElementById('total').innerHTML = "Total a Pagar: $" + pago;
}

const btnResumenClick = document.getElementById('botonResumen');
btnResumenClick.addEventListener("click",calcular);