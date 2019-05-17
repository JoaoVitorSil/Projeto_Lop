
/* 
    Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa 5
*/


var contVidas = 5;
var pontos = 0;
var nivel = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(4,8,4);
  textSize(18);
  fill(400, 400)
  text('Vidas: '+contVidas, 20, 20);
  text('Pontuação: '+pontos, 480, 20);
  text('Nível: '+nivel, 250, 20)
}
