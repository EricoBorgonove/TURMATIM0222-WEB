function calcularIMC (){
    let peso = Number (document.querySelector("#peso").value)
    let altura = Number (document.querySelector("#altura").value)

    let imc = peso/(altura*altura)

    if (imc >=0 && imc<=18.5) var msg = "Abaixo do Peso"
    else if (imc>=18.6 && imc <= 24.9 ) var msg = "Peso Ideal"
    else if (imc>=25 && imc <= 29.9 ) var msg = "Levemente Acima do Peso"
    else if (imc>=30 && imc <= 34.9 ) var msg = "Obesidade Grau 1"
    else if (imc>=35 && imc <= 39.9 ) var msg = "Obesidade Grau II (Severa)"
    else if (imc>=40 && imc <= 80 ) var msg = "Obesidade Grau III (Morbida)"
    else var msg = "Dados Incorretos"


    document.querySelector("#imc").innerText = imc.toFixed(2)
    document.querySelector("#msg").innerText = msg

    






    

}