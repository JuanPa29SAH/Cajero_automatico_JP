



var resultado = document.getElementById("resultado");

var boton_saldo = document.getElementById("Consulta");
boton_saldo.addEventListener("click", saldo);

var boton_depositar = document.getElementById("Abono");
boton_depositar.addEventListener("click", deposito);

var b = document.getElementById("Retiro");
b.addEventListener("click", entregarDinero);

Usuario=localStorage.getItem('User');

if (Usuario=="mali"){
    var saldo1=400;
}else if (Usuario=="juan"){
    var saldo1=700;    
} else if (Usuario=="ana"){
    var saldo1=600;
}

function saldo(){
    alert("Su saldo es de ="+saldo1)
}



function entregarDinero(){
    var i=1;
    var j=1;
    while(j==1){
        var monto2 = prompt("Indique el monto a retirar")
        while(i==1){
            if (monto2 < 0){
                alert("Ingrese un número válido")
                monto2 = prompt ("Ingrese un monto mayor o igual a 0")
                i=1;
            } else if (monto2 > 0){
                alert("Usted está intentando retirar la cantidad de="+monto2)
                i=0;
            }
        }
        
        Nuevosaldo2 = saldo1 - monto2;
        console.log(monto2);
        console.log(Nuevosaldo2);
        if (Nuevosaldo2 < 10){
            alert("Su saldo no puede tener menos de 10 pesitos")
            alert("Ingrese un monto menor a retirar")
            j=1;
        } else if(Nuevosaldo2 >= 10) {
            j=0;
            alert("Ahora cuenta con un saldo de="+Nuevosaldo2)
        }
    }
}


function deposito(){
    var k=1;
    var l=1;
    while(k==1){
        var monto = prompt("Indique el monto a abonar")
        monto=parseFloat(monto);
        while(l==1){
            if (monto < 0){
                alert("Ingrese un número válido")
                monto = prompt ("Ingrese un monto mayor o igual a 0")
                monto=parseFloat(monto);
                l=1;
            } else if (monto > 0){
                alert("Usted está intentando abonar la cantidad de="+monto)
                l=0;
            }
        }

        Nuevosaldo1 = saldo1 + monto;

        if ( Nuevosaldo1 <= 990){
            k=0;
            alert("Ahora cuenta con un saldo de=" + Nuevosaldo1)
        } else {
            k=1;
            alert("Su saldo no puede tener más de 990 pesitos")
            alert("Ingrese un monto menor a abonar")
        }
    }
}
