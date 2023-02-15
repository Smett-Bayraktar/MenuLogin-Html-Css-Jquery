$(document).ready(function(){

    /* Fondo Oscuro */

    $(".boton").click(function(){
        $("body").css("background-image", "linear-gradient(to left,#0a0909, #282c31)")
    })

    $(".boton").click(function(){
        $(".login-card").css("background-image", "linear-gradient(to left,#282c31, #0a0909)")
    })

    $(".boton").click(function(){
        $("body, a, h3").css("color", "#e4e4e4")
    })

    /* Fondo Brillante */

    $(".boton2").click(function(){
        $("body").css("background-image", "linear-gradient(to left,#e4e4e4, #bee4fb)")
    })

    $(".boton2").click(function(){
        $(".login-card").css("background", "#ffffff")
    })

    $(".boton2").click(function(){
        $(".login-card").css("background", "#ffffff")
    })

    $(".boton2").click(function(){
        $("body").css("color", "black")
    })

    $(".boton2").click(function(){
        $("h3").css("color", "gray")
    })

    $(".boton2").click(function(){
        $("a").css("color", "#216ce7")
    })
    
})