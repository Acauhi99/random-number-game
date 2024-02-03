let listaDeNumerosSorteados = []
const NUMEROLIMITE = 10 
let numeroSecreto = gerarNumeroAleatorio()
let contador = 1

mensagemInicial()

function verificarChute() {
  let chute = document.querySelector("input").value
  
  if (chute == numeroSecreto) {
    let palavraTentativa = contador > 1 ? "tentativas" : "tentativa"
    let mensagemTentativas = `Você descobriu o número secreto com ${contador} ${palavraTentativa}`

    exibirTexto("h1", "Acertou!")
    exibirTexto("p", mensagemTentativas)

    document.getElementById("reiniciar").removeAttribute("disabled")
  } else {
    exibirTexto("h1", "Tente novamente")
    if (chute < numeroSecreto) {
      exibirTexto("p", "Tente um número maior")
    } else {
      exibirTexto("p", "Tente um número menor")
    }
    contador++
    limparCampo()
  }
}

function mensagemInicial() {
  exibirTexto("h1", "Jogo do número secreto")
  exibirTexto("p", "Escolha um número entre 1 e 10")
}

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * NUMEROLIMITE + 1)
  let quantidadeElementosLista = listaDeNumerosSorteados.length

  if (quantidadeElementosLista == NUMEROLIMITE) {
    listaDeNumerosSorteados = []
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
  }
}

function limparCampo() {
  chute = document.querySelector("input")
  chute.value = ""
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio()
  limparCampo()
  contador = 1
  mensagemInicial()
  document.getElementById("reiniciar").setAttribute("disabled", true)
}
