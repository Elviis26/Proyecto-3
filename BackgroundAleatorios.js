function iniciarPrograma(){
    
    let boton = document.getElementById("boton-color")
    boton.addEventListener("click",aleatorioColor2)

}

function aleatorioColor2(){
    let nombreColor = document.getElementById("color")    
    let num1 =  Math.floor(Math.random() * 11);
 
   switch (num1){
        case 0:               
        document.body.style.background ="aqua";
        nombreColor.innerHTML="AQUA"     
        break;
        case 1: 
        document.body.style.background = "yellow" ;         
        nombreColor.innerHTML=" AMARILLO"     
        break;
        case 2: 
        document.body.style.background = "pink" ;         
        nombreColor.innerHTML="ROSA"     
        break;
        case 3: 
        document.body.style.background = "purple" ;          
        nombreColor.innerHTML="MORADO"     
        break;
        case 4: 
        document.body.style.background ="blue" ;           
        nombreColor.innerHTML="AZUL"     
        break;
        case 5: 
        document.body.style.background = "orange" ;         
        nombreColor.innerHTML=" NARANJA"     
        break;
        case 6: 
        document.body.style.background = "green" ;          
        nombreColor.innerHTML=" VERDE"     
        break;
        case 7: 
        document.body.style.background = "white" ;         
        nombreColor.innerHTML=" BLANCO"     
        break;
        case 8: 
        document.body.style.background = "gray" ;          
        nombreColor.innerHTML=" GRIS"     
        break;
        case 9: 
        document.body.style.background = "red" ;          
        nombreColor.innerHTML=" ROJO"     
        break;
        case 10: 
        document.body.style.background ="black" ;   
        nombreColor.innerHTML=" NEGRO"               
        break;     
    }
}

window.addEventListener("load", iniciarPrograma)