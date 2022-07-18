 let linkCurriculo= document.getElementById("link-curriculo");
 let linkElEmpleo= document.getElementById("link__elempleo");
 let linkGithub=document.getElementById("link__Github");
 let linkLinkedin= document.getElementById("link__Linkedin");



linkCurriculo.addEventListener(("click"), function(event){

    window.location.href="file:///C:/Users/sygnux2/Documents/Progamacion%20Curso/Logica%20de%20programacion/Nueva%20carpeta%20(2)/challenge-one-portafolio-latam-repositorio-base/documentos/WILMER%20LOAIZA%20%20HV2%20(1).pdf";
    
});

linkElEmpleo.addEventListener(("click"), function(event){

    window.location.href="https://www.elempleo.com/co/hoja-de-vida";
});

linkGithub.addEventListener(("click"), function(event){

    window.location.href="https://github.com/sygnuxalfa?tab=repositories";
});

linkLinkedin.addEventListener(("click"), function(event){

    window.location.href="https://www.linkedin.com/in/wilmer-loaiza-b84b24238/";
});