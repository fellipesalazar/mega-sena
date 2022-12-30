$(function(){

    // ********************************************************
    // variáveis

    const btnGerar = document.getElementById("gerar");
    var qtd_numeros = document.getElementById("qtd_numeros");
    var qtd_jogos = document.getElementById("qtd_jogos");
    var jogosDiv = $(".jogos");


    // ********************************************************
    // eventos

    btnGerar.addEventListener('click', (e)=> {
        e.preventDefault();
        if(qtd_numeros.value == "" || qtd_numeros.value < 6 || qtd_numeros.value > 20 || qtd_jogos.value == "" || qtd_jogos.value == 0 || qtd_jogos.value < 0) {
            alert("Dados inválidos! Tente novamente");
            return;
        }
        preencheDados();
        geraNumeros(qtd_numeros.value, qtd_jogos.value);
    });


    // ********************************************************
    // funções

    const preencheDados = () => {
        const numerosCartela = document.getElementById("numerosCartela");
        const numeroJogos = document.getElementById("numeroJogos");
        const valorTotal = document.getElementById("valorTotal");
        const regras = {
            "6": 4.5,
            "7": 31.5,
            "8": 126,
            "9": 378,
            "10": 945,
            "11": 2079,
            "12": 4158,
            "13": 7722,
            "14": 13513,
            "15": 22522,
            "16": 36036,
            "17": 55692,
            "18": 83538,
            "19": 122094,
            "20": 174420,
        }

        numerosCartela.innerText = qtd_numeros.value;
        numeroJogos.innerText = qtd_jogos.value;

        const valor = regras[qtd_numeros.value] * qtd_jogos.value;
        valorTotal.innerText = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    }

    const sorteador = (qtd_numeros)=> {
        let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];

        numeros.sort(function(a,b){
            return (Math.round(Math.random())-0.5);
        });

        let numerosSorteio = numeros.slice(0,qtd_numeros);

        numerosSorteio.sort(function(a,b){
            return a - b;
        });

        return numerosSorteio;
    }

    const geraNumeros = (qtd_numeros, qtd_jogos) => {
        var linha = "";
        var bola = "";

        for(i=1;i<=qtd_jogos;i++){
            sorteador(qtd_numeros).forEach(numero => {
                bola += '<div class="bola">'+numero+'</div>';
            });
            
            linha += '<div class="linha"><span class="numero-jogo">Jogo '+i+'</span>'+bola+'</div>';

            bola = "";
        }
        
        jogosDiv.html(linha).addClass("active");
        
    }

});