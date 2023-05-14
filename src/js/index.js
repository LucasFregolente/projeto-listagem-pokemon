// passo 1 - pegar o elemento HTML do botao, body e scr da imagem

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 2 - pegar o click no botao, mudar classe do body e mudar a imagem no src

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    
    if (modoEscuroEstaAtivo) {        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {     
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});
