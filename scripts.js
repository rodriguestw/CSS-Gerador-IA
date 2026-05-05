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
// fetch - ferramenta do JS para se comunicar com o servidor 


// 1 DESCOBRI QUE É O BOTÃO 
let botao = document.querySelector(".botao-gerar")
let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"


// 2 CRIEI A FUNÇÃO QUE SERÁ CHAMADA QUANDO O BOTÃO FOR CLICADO
async function gerarCodigo() {
    let textoUsuario = document.querySelector(".caixa-texto").value //value - Valor (pegar oq tem dentro do textarea)


    // endereço e configurações 
    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: `Você é um gerador de código HTML e CSS.
                    Responda EXATAMENTE nesse formato:
                    ---CSS---
                    (código CSS aqui)

                    ---HTML---
                    (código HTML aqui)

                    NÃO escreva explicações. NÃO passe do limite de borda no meio do site`},
                {
                    role: "user",
                    content: textoUsuario
                }
            ]
        })
    })

    let dados = await resposta.json()

    console.log(dados)

    let codigo = dados.choices[0].message.content

let partes = codigo.split("---HTML---")

let cssParte = partes[0].replace("---CSS---", "").trim()
let htmlParte = partes[1].trim()

mostrarResultado(cssParte, htmlParte)
}

//vizinho curioso(addEventListener)
// adicionar ouvinte de evento
//Evento = clique, digitar... 

//3 FICAR DE OLHO NO BOTÃO, QUANDO CLICADO CHAMAR O CRIAR CODIGO
botao.addEventListener("click", gerarCodigo)

function mostrarResultado(css, html) {
    let preview = document.querySelector(".preview")
    let cssBox = document.querySelector(".css")
    let htmlBox = document.querySelector(".html")

    // Mostra código
    cssBox.textContent = css
    htmlBox.textContent = html

    // Renderiza preview
    preview.innerHTML = `
        <style>${css}</style>
        ${html}
    `
}


