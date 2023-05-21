function calcular(){
    var pago = document.getElementById('valor').value;
    var categoria = document.getElementById('categoria').value;
    var descuento;

    switch(categoria){
        case "1":
            pago = 200 * pago;
            descuento = pago * 0.80
            pago -= descuento;
            break;
        case "2":
            pago = 200 * pago;
            descuento = pago * 0.50
            pago -= descuento;
            break;
        case "3":
            pago = 200 * pago;
            descuento = pago * 0.15
            pago -= descuento;
            break;
    }
    document.getElementById('total').innerHTML = "Total a Pagar: $" + pago;
}



const btnResumenClick = document.getElementById('botonResumen');
btnResumenClick.addEventListener("click",calcular);