let boton1 = document.getElementById("button1");
let boton2 = document.getElementById("button2");
let boton3 = document.getElementById("button3")
let boton4 = document.getElementById("button4")

boton1.addEventListener("click", function abrirPagina() {
    window.open("https://github.com/samuelrendonl", "_blank");
  });

boton2.addEventListener("click", function abrirPagina(){
    window.open("https://www.instagram.com/samuelrendonl/")
})

boton3.addEventListener("click", function abrirPagina(){
    window.open("https://www.youtube.com/@samuelrendonlozano496")
})

boton4.addEventListener("click", function abrirPagina(){
    window.open("https://www.tiktok.com/@samuelrendonl")
})
