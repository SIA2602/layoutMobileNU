
function ocultDisplay(){    
    document.getElementById("entrada").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

window.setTimeout(ocultDisplay, 2500);

var cont = true;
function oculta(){    
    if(!cont){
        document.getElementById("saldoFatura01").style.display = "block";
        document.getElementById("saldoFatura02").style.display = "block";
        document.getElementById("saldo").style.display = "block";
        document.getElementById("textoOculto01").style.display = "none";   
        document.getElementById("textoOculto02").style.display = "none";     
        
        var img = document.getElementById("imageEyes");
        img.src="assets/img/eyes.png";
    }
    else{
        document.getElementById("saldoFatura01").style.display = "none";
        document.getElementById("saldoFatura02").style.display = "none";
        document.getElementById("saldo").style.display = "none";
        document.getElementById("textoOculto01").style.display = "block"; 
        document.getElementById("textoOculto02").style.display = "block"; 

        var img = document.getElementById("imageEyes");
        img.src="assets/img/noEyes.png";
    }   
    cont = !cont; 
}