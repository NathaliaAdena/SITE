$(document).ready(function(){

    let slideAtual = 1
    let listadeSlides = ["banner-1", "banner-2", "banner-3, "banner-4", "banner-5", "banner-6"]

    setInterval(mudarSlide, 2000)
    function mudarSlide(){

        if(slideAtual > 0){
        $("#carrossel").removeClass(listadeSlides[slideAtual - 1])
    }else {
        $("#carrossel").removeClass(listadeSlides[listadeSlides.length - 1])
    }

        $("#carrossel").addClass(listaSlides [slideAtual])

        console.log("slide atual", slideAtual)
        slideAtual ++;

        if(slideAtual > listadeSlides.length - 1){
            slideAtual = 0
        }

    }

    $("#barras").click(function(){
        if ($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")
        }else{
            $("#menu").addClass("menu-ativo")
        }

    })
})


function cadastrarNewsletter(){
let email = document.getElementById("campo-email").value
alert(email)
}

function mostrarMenu($event){
let menu = document.getElementById("menu")

if(getComputedStyle(menu).display == "none"){    
    menu.style.display = "flex"
}else{
    menu.style.display = "none"
}

event.preventDefault()
}