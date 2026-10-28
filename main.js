alert("Oie! bem vindos!!");

function hoppy() {
    alert("Se você tiver 1,5m você poderá entrar!")
    let altura = Number(prompt("Qual sua altura?"))

    if (altura >= 1.5) {
        alert("Você pode entrar, aproveite ;)")
    }
    else {
        alert("Desculpa, você não tem alura suficiente :(")
    }

}
function teste() {
    alert("A quantidade do estoque esta ok ou baixa?")
    let estoque = Number(prompt("Digite o numero do estoque do produto:"))

    if (estoque >= 5) {
        alert("Ok!")
    }
    else {
        alert("Está baixo!")
    }
}
function menor() {
    alert("Esta taxa 10% ou Insento?")
    let valor = Number(prompt("Digite:"))

    if (valor <= 10) {
        alert("Insento")
    }
    else {
        alert("Taxa 10%")
    }
}
function maior() {
    alert("Qual sua nota?")
    let valor = Number(prompt("Digite aqui:"))
    if (valor >= 5) {
        alert("Aprovada(o)!")
    }
    else {
        alert("Reprovado!!")
    }
}

function diferente(){
    alert("Qual sua 1° cor?")
    let cores = String (prompt("Digite:"))
    alert("Qual sua 2° cor?")
    let cor = String (prompt("Digite:"))
    if (cores != cor){
        alert("Verdadeiro")
    }
    else{
        alert("Falso")
    }
}




