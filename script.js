let elemento = document.querySelector('.botao');
elemento.addEventListener('click', function() {
  document.getElementById('retangulo1').style.display = 'block';
  document.querySelector('.botao').style.display = "none";
  document.querySelector('.botao2').style.display = "none";
  document.querySelector('.botao3').style.display = "none";

  document.querySelector('.item-img').src = listaDeProdutos[3].imagem;
  document.querySelector('.item-img2').src = listaDeProdutos[4].imagem;
  });

  let elemento2 = document.querySelector('.botao2');
elemento2.addEventListener('click', function() {
 document.getElementById('retangulo1').style.display = 'block';
  document.querySelector('.botao').style.display = "none";
  document.querySelector('.botao2').style.display = "none";
  document.querySelector('.botao3').style.display = "none";
  document.querySelector('.rectangleson').style.display = "none";
  document.querySelector('.rectangleson2').style.display = "block";

  document.querySelector('.item-img3').src = listaDeProdutos[5].imagem;
  document.querySelector('.item-img4').src = listaDeProdutos[4].imagem;
  });

  let elemento3 = document.querySelector('.botao3');
elemento3.addEventListener('click', function() {
  document.getElementById('retangulo1').style.display = 'block';
  document.querySelector('.botao').style.display = "none";
  document.querySelector('.botao2').style.display = "none";
  document.querySelector('.botao3').style.display = "none";
  document.querySelector('.rectangleson').style.display = "none";
  document.querySelector('.rectangleson3').style.display = "block";

  document.querySelector('.item-img5').src = listaDeProdutos[6].imagem;
  document.querySelector('.item-img6').src = listaDeProdutos[4].imagem;
  });

  function mostrarJanela() {
    //document.getElementById('janela').style.display = 'block';
  }

  //espaço dedicado para ojetos
  let listaDeProdutos = [
    {
        imagem: 'imagens/boneadidas.jpg',
        nome: 'Bone',
        quantidade: 0, 
        preço: 'R$:0,02'
    },
    {
        imagem: 'imagens/bros160.webp',
        nome: 'Bros 160',
        quantidade: 0,
        preço: 'R$:0,01'
    },
    {
        imagem: 'imagens/pantufa.webp',
        nome: 'Pantufa',
        quantidade: 0,
        preço: 'R$:0,99'
    }, {
        imagem: 'imagens/rbl.gif'
    }, {
        imagem: 'imagens/load.gif'
    }
    ,{
        imagem: 'imagens/fud.gif'
    }
    ,{
        imagem: 'imagens/gok.gif'
    }
    // Adicione mais produtos conforme necessário
];

let first_image = document.querySelector('.itemone img');
let primeiraImagem = listaDeProdutos[0].imagem;
        // Definir o atributo src da tag img com a URL da imagem
        first_image.src = primeiraImagem;

        let first_image2 = document.querySelector('.itemone2 img');
let primeiraImagem2 = listaDeProdutos[1].imagem;
        // Definir o atributo src da tag img com a URL da imagem
        first_image2.src = primeiraImagem2;

        let first_image3 = document.querySelector('.itemone3 img');
let primeiraImagem3 = listaDeProdutos[2].imagem;
        // Definir o atributo src da tag img com a URL da imagem
        first_image3.src = primeiraImagem3;
        let primeiraImagem4 = listaDeProdutos[3].imagem;

        let cliqueIMG = document.querySelector('.gatoDb');
cliqueIMG.addEventListener('click', function() {
  document.querySelector(".todaAtela").style.display = "flex";
  document.querySelector('#elemento-movel').style.display = "none";
  document.querySelector('.item-img').style.display = "none";
  document.querySelector('.item-img2').style.display = "none";
  });

  //codigo da IA
  document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");

    const knowledgeBase = {
        "qual é o seu nome": "Meu nome é ChatBot.",
        "como você está": "Eu sou apenas um programa, mas obrigado por perguntar!",
        "quem criou você": "Fui criado por uma equipe de desenvolvedores."
    };

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processUserInput() {
        const userMessage = userInput.value.toLowerCase();

        if (knowledgeBase[userMessage]) {
            addMessage("IA", knowledgeBase[userMessage]);
        } else {
            const userResponse = prompt("Desculpe, eu não sei a resposta. Pode me ensinar?");

            if (userResponse) {
                knowledgeBase[userMessage] = userResponse;
                addMessage("IA", "Obrigado por me ensinar!");
            } else {
                addMessage("IA", "Sem problema, talvez eu aprenda na próxima vez!");
            }
        }
    }

    userInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            processUserInput();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const elementoMovel = document.getElementById('elemento-movel');

});