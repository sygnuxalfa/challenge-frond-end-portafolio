let cantidadLetras= document.getElementById("mensagem");
let contador= document.getElementById("contacto_contador");

num_caracteres_permitidos = 20;

function contarLetras(){

   let  numeroLetras= cantidadLetras.value.length;

   if( numeroLetras > num_caracteres_permitidos){
       
       cantidadLetras.setAttribute("readonly"," readonly")
   }
   else{

    contador.textContent="20/"+numeroLetras;
   }

}




document.addEventListener("DOMContentLoaded", function(){

let formulario= document.getElementById("contacto__formulario");

formulario.addEventListener('submit', function(){
    formulario.reset();
    
  });

});