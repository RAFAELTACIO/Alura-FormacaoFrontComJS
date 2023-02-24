function tocaSom(seletorAudio){
   const elemento =   document.querySelector(seletorAudio);
    if (elemento === null) {
        console.log('ELEMENTO NÃO ENCONTRADO')   
    }
    //NÃO PRECISA DEIXAR O == NULL PORQUE O JAVASCRIPT ENTENDE SOZINHO
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
        }else{
            console.log('ELEMENTO NÃO ENCONTRADO OU SELETOR INVÁLIDO');
        }
    }

listaDeTeclas = document.querySelectorAll('.tecla')


for (let contador = 0; contador<listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick= function () {
        tocaSom(idAudio)
    } 

    tecla.onkeydown= function (evento){

        console.log(evento.code)
        
        if (evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup= function (){
        tecla.classList.remove('ativa');
    }
}

