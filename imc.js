function calculaIMC() {
    const peso = document.querySelector("#peso").value
    const altura = document.querySelector("#altura").value / 100
    const dizPeso = document.querySelector("#diz-peso")
    const IMC = peso / altura **2

    const exibirImc = document.querySelector("#exibir-imc")
    
    if(IMC <= 17){
        exibirImc.innerText= "Muito Abaixo do peso"
    }else if(IMC <= 18.5){
        exibirImc.innerText= "Abaixo do peso"
    }else if(IMC <= 24.9){
        exibirImc.innerText= "Peso normal"
    }else if(IMC <= 29.9) {
        exibirImc.innerText= "Acima do peso"
    }else if(IMC <= 34.9) {
        exibirImc.innerText= "Obesidade 1"
    }else if(IMC <= 39.9) {
        exibirImc.innerText= "Obesidade 2 (Severa)"
    }else if(IMC > 40) {
        exibirImc.innerText= "Obesidade 3 (Mórbida)"
    }

    if(peso && altura){
        dizPeso.innerText = `O seu IMC é: ${IMC.toFixed(1)}`
    }else {
        dizPeso.innerText = ""
        exibirImc.innerText = "Insira o peso e a altura"
    }
}
const enviar = document.querySelector("#enviar")
enviar.addEventListener("click", calculaIMC)