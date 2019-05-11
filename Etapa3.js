/* 
    Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa 3
*/

var x = 30
var y = 200
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  ellipse(x, y, 30, 30)
  x = x + 3
  if(x>400){
    x = - random(1000)
  }
}
