function cpfValido(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, "")
    let cpfCortado = cpfLimpo.slice(0, -2).split("").map((x) => Number(x))

    let primeiraSoma = 0
    let segundaSoma = 0
    let primeiroDigito = 0
    let segundoDigito = 0

    for (n in cpfCortado) {
        primeiraSoma += cpfLimpo[n] * (10 - n)
    }

    primeiroDigito = 11 - (primeiraSoma % 11)
    if (primeiroDigito > 9) {
        primeiroDigito = 0
    }

    cpfCortado.push(primeiroDigito)

    for (n in cpfCortado) {
        segundaSoma += cpfLimpo[n] * (11 - n)
    }

    segundoDigito = 11 - (segundaSoma % 11)
    if (segundoDigito > 9) {
        segundoDigito = 0
    }

    cpfCortado.push(segundoDigito)
    let cpfLimpoMapeado = cpfLimpo.split("").map((x) => Number(x))

    if (cpfCortado.join("") == cpfLimpoMapeado.join("")) {
        return true
    } else {
        return false
    }
}

let button = document.querySelector("button")
let inputCPF = document.querySelector(".inputCPF")
let returnText = document.querySelector("p")

button.addEventListener("click", () => {
    if (inputCPF.value.length == 11) {
        if (cpfValido(inputCPF.value) == true) {
            inputCPF.classList.add("valid")
            returnText.innerText = "O CPF inserido é válido."
        } else {
            inputCPF.classList.add("invalid")
            returnText.innerText = "O CPF inserido é inválido."
        }
    } else {
        inputCPF.classList.add("invalid")
        returnText.innerText = "Um CPF precisa ter exatamente 11 números, por favor, insira o número correto de caracteres"
    }
})

