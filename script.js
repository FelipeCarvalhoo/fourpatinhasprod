let elemento = document.querySelector('.botao');
elemento.addEventListener('click', function() {
  document.getElementById('retangulo1').style.display = 'block';
  document.querySelector('.botao').style.display = "none";
  document.querySelector('.botao2').style.display = "none";
  document.querySelector('.botao3').style.display = "none";
  });

  let elemento2 = document.querySelector('.botao2');
elemento2.addEventListener('click', function() {
  document.getElementById('retangulo1').style.display = 'block';
  document.querySelector('.botao').style.display = "none";
  document.querySelector('.botao2').style.display = "none";
  document.querySelector('.botao3').style.display = "none";
  });

  let elemento3 = document.querySelector('.botao3');
elemento3.addEventListener('click', function() {
  document.getElementById('retangulo1').style.display = 'block';
  document.querySelector('.botao').style.display = "none";
  document.querySelector('.botao2').style.display = "none";
  document.querySelector('.botao3').style.display = "none";
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

        const mod = document.querySelector('.rectangle h1');
        mod.innerHTML = "Olá, este texto foi modificado!"
        const altera = document.querySelector('.modifica');
        altera.innerHTML = "Mais uma alteração s2"
        