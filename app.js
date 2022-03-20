let valor = document.querySelector("div.container input")
let tabuada = document.querySelector("div.container div.tabuada")
const calcular = document.querySelector("div.container button")

calcular.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if(Number(valor.value) < 1 || Number(valor.value) > 12){
        
        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 12"
    }else {
        for(i = 1; i <=12; i++){

          let calc = String(i) + ' x ' + valor.value + " = " + i * Number(valor.value)

          let resultado = document.createElement("p")

          resultado.innerText = calc

          tabuada.appendChild(resultado)
        }
    }
})
