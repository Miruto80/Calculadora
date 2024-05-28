const pantalla=document.querySelector(".pantalla"); //Llamando a lo que este dentro de pantalla
const botones=document.querySelectorAll(".btn"); //Llamando a todos los botones

botones.forEach(boton =>{//para cada boton
boton.addEventListener("click",() => {//Un listener para cuando se haga click
    const botonApretado = boton.textContent;//Una variable que va a almacernar el contenido de texto del boton

    if(boton.id==="c"){
        pantalla.textContent ="0"; //se pone a 0 todo
        return; //esto es para que no ejecute lo de abajo despues de este condicional
    }
    if(boton.id ==="Borrar"){
        if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"  ){ //Para cuando haya solo un elemento sea 0 en pantalla
            pantalla.textContent="0";
        }else{
        pantalla.textContent = pantalla.textContent.slice(0, -1);//Slice es para cortar como nunca sabes cual va a ser la ultima posicion del arreglo usamos -1 para quitar el ultimo
        }
        return;
    }

    if(boton.id ==="igual"){
        try{
            pantalla.textContent=eval(pantalla.textContent); //Nos evalua el resultado que haya en pantalla es decir operaciones matematicas y las muestra 
        }catch{
            pantalla.textContent ="Error";
        }
        return;
    }

    
    if(pantalla.textContent === "0"|| pantalla.textContent === "Error"){//si en pantalla es igual cero se reemplaza 
        pantalla.textContent = botonApretado;
    }else{// y si no se va agregando
    pantalla.textContent += botonApretado;
    }

})
})


