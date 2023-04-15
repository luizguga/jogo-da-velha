const posicao = document.querySelector('input#posicao');
const x = document.querySelector('input#X');
const o = document.querySelector('input#O');
const button = document.querySelectorAll('section.jogada');

const campo = document.querySelectorAll('.jogada div');

let jogadas = [];
let ultimaJogada;
let escolha;

document.body.onload = ()=>{
    let janela = document.createElement('div');
    janela.style.position = 'absolute';
    janela.style.top = '0';
    janela.style.left = '0';
    janela.style.width = '100vw';
    janela.style.height = '100vh';
    janela.style.backgroundColor = 'rgba(255,255,255,.9)';
    document.body.appendChild(janela);

    let para = document.createElement('p');
    para.innerText = 'Escolha com o que começar: ';
    para.style.marginTop = '10%'
    janela.appendChild(para);

    let div = document.createElement('div');
    div.style.width = 'fit-content';
    div.style.margin = 'auto';
    janela.appendChild(div);

    let divX = document.createElement('div');
    divX.style.display = 'inline-block';
    divX.style.width = '150px';
    divX.style.height = '150px';
    divX.style.margin = '0 5px';
    divX.style.backgroundImage = 'url(imagens/x.png)';
    divX.style.backgroundPosition = 'center center';
    divX.style.backgroundSize = '80% 80%';
    divX.style.backgroundRepeat = 'no-repeat';
    divX.style.border = '2px solid black';
    divX.style.borderRadius = '5px';
    divX.style.cursor = 'pointer'
    div.appendChild(divX);

    divX.addEventListener('click', ()=>{
        ultimaJogada = 'X';
        divX.style.borderColor = 'rgba(0,0,0,.95)';
        janela.style.transition = 'display 1s';
        janela.style.display = 'none';
    });

    let divO = document.createElement('div');
    divO.style.display = 'inline-block';
    divO.style.width = '150px';
    divO.style.height = '150px';
    divO.style.margin = '0 5px';
    divO.style.backgroundImage = 'url(imagens/circulo.png)';
    divO.style.backgroundPosition = 'center center';
    divO.style.backgroundSize = '80% 80%';
    divO.style.backgroundRepeat = 'no-repeat';
    divO.style.border = '2px solid black';
    divO.style.borderRadius = '5px';
    div.appendChild(divO);

    divO.addEventListener('click', ()=>{
        ultimaJogada = 'O';
        divO.style.borderColor = 'rgba(0,0,0,.95)';
        janela.style.transition = 'display 1s';
        janela.style.display = 'none';
    });
};

button[0].addEventListener('touchstart', ()=>{jogo(0)});
button[1].addEventListener('touchstart', ()=>{jogo(1)});
button[2].addEventListener('touchstart', ()=>{jogo(2)});
button[3].addEventListener('touchstart', ()=>{jogo(3)});
button[4].addEventListener('touchstart', ()=>{jogo(4)});
button[5].addEventListener('touchstart', ()=>{jogo(5)});
button[6].addEventListener('touchstart', ()=>{jogo(6)});
button[7].addEventListener('touchstart', ()=>{jogo(7)});
button[8].addEventListener('touchstart', ()=>{jogo(8)});

button[0].addEventListener('touchend', ()=>{alertaVitoria()});
button[1].addEventListener('touchend', ()=>{alertaVitoria()});
button[2].addEventListener('touchend', ()=>{alertaVitoria()});
button[3].addEventListener('touchend', ()=>{alertaVitoria()});
button[4].addEventListener('touchend', ()=>{alertaVitoria()});
button[5].addEventListener('touchend', ()=>{alertaVitoria()});
button[6].addEventListener('touchend', ()=>{alertaVitoria()});
button[7].addEventListener('touchend', ()=>{alertaVitoria()});
button[8].addEventListener('touchend', ()=>{alertaVitoria()});

button[0].addEventListener('mousedown', ()=>{jogo(0)});
button[1].addEventListener('mousedown', ()=>{jogo(1)});
button[2].addEventListener('mousedown', ()=>{jogo(2)});
button[3].addEventListener('mousedown', ()=>{jogo(3)});
button[4].addEventListener('mousedown', ()=>{jogo(4)});
button[5].addEventListener('mousedown', ()=>{jogo(5)});
button[6].addEventListener('mousedown', ()=>{jogo(6)});
button[7].addEventListener('mousedown', ()=>{jogo(7)});
button[8].addEventListener('mousedown', ()=>{jogo(8)});

button[0].addEventListener('mouseup', ()=>{alertaVitoria()});
button[1].addEventListener('mouseup', ()=>{alertaVitoria()});
button[2].addEventListener('mouseup', ()=>{alertaVitoria()});
button[3].addEventListener('mouseup', ()=>{alertaVitoria()});
button[4].addEventListener('mouseup', ()=>{alertaVitoria()});
button[5].addEventListener('mouseup', ()=>{alertaVitoria()});
button[6].addEventListener('mouseup', ()=>{alertaVitoria()});
button[7].addEventListener('mouseup', ()=>{alertaVitoria()});
button[8].addEventListener('mouseup', ()=>{alertaVitoria()});

function verificarVitoria(matriz){
    // Verificação das horizontais
    if((matriz[0] === 'X' && matriz[1] === 'X' && matriz[2] === 'X') || (matriz[0] === 'O' && matriz[1] === 'O' && matriz[2] === 'O')){
        return true;
    }else if((matriz[3] === 'X' && matriz[4] === 'X' && matriz[5] === 'X') || (matriz[3] === 'O' && matriz[4] === 'O' && matriz[5] === 'O')){
        return true;
    }else if((matriz[6] === 'X' && matriz[7] === 'X' && matriz[8] === 'X') || (matriz[6] === 'O' && matriz[7] === 'O' && matriz[8] === 'O')){
        return true;
    }// Verificação das verticais
     else if((matriz[0] === 'X' && matriz[3] === 'X' && matriz[6] === 'X') || (matriz[0] === 'O' && matriz[3] === 'O' && matriz[6] === 'O')){
        return true;
    }else if((matriz[1] === 'X' && matriz[4] === 'X' && matriz[7] === 'X') || (matriz[1] === 'O' && matriz[4] === 'O' && matriz[7] === 'O')){
        return true;
    }else if((matriz[2] === 'X' && matriz[5] === 'X' && matriz[8] === 'X') || (matriz[2] === 'O' && matriz[5] === 'O' && matriz[8] === 'O')){
        return true;
    }// Verificação das diagonais
     else if((matriz[0] === 'X' && matriz[4] === 'X' && matriz[8] === 'X') || (matriz[0] === 'O' && matriz[4] === 'O' && matriz[8] === 'O')){
        return true;
    }else if((matriz[2] === 'X' && matriz[4] === 'X' && matriz[6] === 'X') || (matriz[2] === 'O' && matriz[4] === 'O' && matriz[6] === 'O')){
        return true;
    }
};

function verificarFim(matriz){
    if(typeof(matriz[0]) === 'string' && typeof(matriz[1]) === 'string' && typeof(matriz[2]) === 'string' && typeof(matriz[3]) === 'string' && typeof(matriz[4]) === 'string' && typeof(matriz[5]) === 'string' && typeof(matriz[6]) === 'string' && typeof(matriz[7]) === 'string' && typeof(matriz[8]) === 'string'){
        return true;
    }else{
        return false;
    }
};

function alertaVitoria(){
    let botao;
    if(verificarVitoria(jogadas)){
        alerta('O jogador '+'"'+escolha+'"'+' ganhou! Clique em "OK" para jogar novamente!');
        botao = document.querySelector('div#botao');
        botao.onclick = ()=>{
            botao.style.borderColor = 'black';
            document.location.reload(false);
        }
    }else if(verificarFim(jogadas)){
        alerta('Deu velha! Clique em "ok" para jogar novamente!');
        botao = document.querySelector('div#botao');
        botao.onclick = ()=>{
            botao.style.borderColor = 'black';
            document.location.reload(false);
        }
    }
};

function jogo(pos){
    if(jogadas[pos]){
        alert("Espaço já preenchido!");
    }else if(ultimaJogada === 'X'){
        let spriteJogo = document.createElement('img');
        spriteJogo.src = 'imagens/x.png';
        spriteJogo.style.display = 'block';
        spriteJogo.style.width = '100%';
        spriteJogo.style.height = '100%';
        campo[pos].appendChild(spriteJogo);

        jogadas[pos] = ultimaJogada;
        escolha = ultimaJogada;
        ultimaJogada = 'O';
    }else{
        let spriteJogo = document.createElement('img');
        spriteJogo.src = 'imagens/circulo.png';
        spriteJogo.style.display = 'block';
        spriteJogo.style.width = '100%';
        spriteJogo.style.height = '100%';
        campo[pos].appendChild(spriteJogo);

        jogadas[pos] = ultimaJogada;
        escolha = ultimaJogada;
        ultimaJogada = 'X';
    }
};

function alerta(texto){
    let janela = document.createElement('div');
    janela.style.display = 'block';
    janela.style.width = '100vw'
    janela.style.height = '100vh'
    janela.style.position = 'absolute';
    janela.style.top = '50%';
    janela.style.left = '50%';
    janela.style.transform = 'translate(-50%,-50%)';
    janela.style.backgroundColor = 'rgba(255,255,255,0.95)';
    janela.style.fontFamily = '\'Press Start 2P\', cursive';
    document.body.appendChild(janela);

    let mensagem = document.createElement('p');
    mensagem.innerText = texto;
    mensagem.style.position = 'absolute';
    mensagem.style.top = '35%';
    mensagem.style.left = '50%';
    mensagem.style.transform = 'translate(-50%,-50%)'
    mensagem.style.width = '70%';
    mensagem.style.lineHeight = '1.3em';
    janela.appendChild(mensagem);

    let botao = document.createElement('div');
    botao.setAttribute('id', 'botao');
    botao.innerText = 'OK';
    botao.style.display = 'block';
    botao.style.position = 'absolute';
    botao.style.padding = '10px 40px';
    botao.style.border = '2px solid rgba(0,0,0,.3)';
    botao.style.borderRadius = '10px';
    botao.style.top = '50%';
    botao.style.left = '50%';
    botao.style.transform = 'translate(-50%,-50%)';
    botao.style.fontFamily = '\'Press Start 2P\', cursive';
    janela.appendChild(botao);
};