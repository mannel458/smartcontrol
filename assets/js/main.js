let nome = prompt("Digite seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let data = new Date().toLocaleString("pt-BR", { datestyle: "full", timeStyle: "short" })
console.log(`Olá ${nome} ${sobrenome} hoje é ${data}. 67`)


setInterval(() => {
    let BemVindoElement = document.getElementById("bem-vindo")
    BemVindoElement.innerHTML = `Bem-Vindo, ${nome} ${sobrenome}! Hoje é ${data}.`
},3*1000)
