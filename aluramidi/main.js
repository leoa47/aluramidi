function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
    
}


const listaDeTeclas = document.querySelectorAll('.tecla')


let contador = 0


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;//templete string

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space")
        tecla.classList.add('ativa');
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

    //console.log(idAudio);usar no navegador
    //console.log(contador); usar no navegador
    //function tocaSomClap() {
    //document.querySelector('#som_tecla_clap').play();


//document.querySelector('.tecla_pom') .onclick = tocaSomPom;
 
//document.querySelector('.tecla_clap') .onclick = tocaSomClap;


