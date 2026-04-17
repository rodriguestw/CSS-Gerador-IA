/*
    Variável - é um pedacinho de memória que eu posso guardar o que eu quiser
    Algoritmo - É a receita do bolo (Uma sequência de passos para resolver um problema)
    Função - é um pedacinho do condigo QUE só EXECUTA quando é chamado
    Logica da progamação - É fazer o bolo(é saber os passos para fazer algo)

    // Algoritmo do nosso sistema 
    // Logica de progamação 

    Passos:
    [x] Saber quem é o botão 
    [ ] Saber quando o botão foi clicado
    [ ] Sber quem é o textarea
    [ ] Pegar oq tem dentro dele 
    [ ] Enviar para a IA
    [ ] Pegar a resposta da IA e colocar na tela 

*/ 

// 1° precisa ir no HTML e pega o botão
// HTML = document (documento )
//Selecionar (querySelector)
//Quem ? Bontão
// Apelido para o botão - classes(class) 

// DESCOBRI QUE É O BOTÃO
let botao = document.querySelector(".botao-gerar")

//CRIEI A FUNÇÃO QUE SERÁ CHAMADA QUANDO O BOTÃO FOR CLICADO
function gerarCodigo(){
    alert("Chamei a funcao")
}

//vizinho curioso(addEventListener)
// adicionar ouvinte de evento
//Evento = clique, digitar...

// FICAR DE OLHO NO BOTÃO, QUANDO CLICADO CHAMAR O CRIAR CODIGO
botao.addEventListener("click", gerarCodigo)

