function clock () {
    var img = document.getElementById("imagem")
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();
    const horas = horaAgora.getHours ();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();
    //const formatoHoras = horas.toString().padStart (2, "0");
    const formatoHoras = 16
    const formatoMinutos = minutos.toString().padStart (2, "0");
    const formatoSegundos = segundos.toString().padStart (2, "0");

    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;


const frase = document.querySelector(".frase");
    //Array é um arranjo ou estrutura de dados onde amarzemanamos uma coleção de elementos.
    //array Dias da semana
    dia = new Array ("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");
//Array Mês
    mes = new Array ("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

    hoje = new Date ()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, "0")} de  ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if(formatoHoras >=0 && formatoHoras <12){
        document.body.style.backgroundImage = "url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sunny-clouds-day-zoom-conference-background-design-template-ed7b80aadb1847f9ecc88661ece37188_screen.jpg?ts=1585836972')"

        img.src = "js.jpg"


    }

    else if ( formatoHoras >=12 && formatoHoras <18){
        document.body.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fw800/background/20200826/pngtree-tropical-sunset-background-in-beach-with-palm-and-birds-image_397108.jpg')"
        document.body.style.backgroundRepeat = "norepeat"
        document.body.style.backgroundSize = "100%"

        img.src = "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg"



    }

    else {
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/d0/23/8c/d0238cb99f92497664a3988818e7a157.jpg')"
    }


   






}

setInterval (clock, 1000)
