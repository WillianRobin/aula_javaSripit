let nome = prompt("Qual seu nome?")
console.log(nome.toUpperCase())

let numero1 = parseInt(prompt("me fale um numero."))
let numero2 = parseInt(prompt("Agora o segundo."))

alert(`Seu resultado é ${numero1 + numero2}`)

let idade = prompt("Me informe su idade.")

if (idade >= 18 && idade < 60) {
    alert("você é adulto.")
    alert("você pode dirigir.")
} else if (idade >= 60) {
    alert("Você é Idoso.")
    alert("Idade avançada mas ainda pode dirigir.")
} else {
    alert("você é criança/adolecente.")
    alert("você nâo pode dirigir.")
}

let numero3 = prompt("me fale um número.")

if (numero3 > 0) {
    console.log("Número é Positivo")
}
else if (numero3 == 0) {
    console.log("Numero é Zero")
} else {
    console.log("Numero é Negativo")
}

let altura = prompt("me informe sua altura.")
let peso = prompt("Agora seu peso.")

let imc = peso / (peso*2)

if (imc >= 18.5 && imc <= 24,9) {
    alert("saúde boa meu Nobre")
    
} else {
    alert("Que saúde Horrivel")
}