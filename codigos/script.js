const posicao = document.querySelector('input#posicao');
const x = document.querySelector('input#X');
const o = document.querySelector('input#O');
const button = document.querySelectorAll('section.jogada');

const campo = document.querySelectorAll('.jogada div');

let jogadas = [];
let ultimaJogada;

button[0].addEventListener('click', ()=>{jogo(0)});
button[1].addEventListener('click', ()=>{jogo(1)});
button[2].addEventListener('click', ()=>{jogo(2)});
button[3].addEventListener('click', ()=>{jogo(3)});
button[4].addEventListener('click', ()=>{jogo(4)});
button[5].addEventListener('click', ()=>{jogo(5)});
button[6].addEventListener('click', ()=>{jogo(6)});
button[7].addEventListener('click', ()=>{jogo(7)});
button[8].addEventListener('click', ()=>{jogo(8)});

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

function jogo(pos){
    let vitoria = verificarVitoria(jogadas);
    if(vitoria){
        alert('Jogo terminado! Jogador '+ultimaJogada+" venceu!");
        Location.reload(true);
    }else{
        if(jogadas[pos]){
            alert("Espaço já preenchido!")
        }else if(x.checked){
            if(ultimaJogada === 'X'){
                alert('Vez do jogador "O"!');
            }else{
                ultimaJogada = x.value
                campo[pos].innerText = x.value
                jogadas[pos] = x.value
            }
        }else{
            if(ultimaJogada === 'O'){
                alert('Vez do jogador "X"!');
            }else{
                ultimaJogada = o.value
                campo[pos].innerText = o.value
                jogadas[pos] = o.value
            }
        }
    }
}