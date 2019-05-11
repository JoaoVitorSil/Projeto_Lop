/* 
    Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa 3
*/

var x = 30;
var y = 200;
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(220);
  ellipse(x, y, 30, 30);
  x = x + 6;
  if(x>600){
    x = - random(1000);
  }
}
