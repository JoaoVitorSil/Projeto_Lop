/* 
    Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa 4
*/

var x = 100;
var y = 200;
var xd = 0;
var yd = 0;
disparo = false;
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(220);
  ellipse(x, y, 30, 30);
  if(keyIsDown(UP_ARROW)){
     y = y -= 4;
  }
  if(keyIsDown(DOWN_ARROW)){
     y = y += 4;
  }
  ellipse(xd, yd, 5, 5);
  if(keyIsDown(RIGHT_ARROW) && disparo == false){
     xd = x;
     yd = y;
    disparo = true;
  }  
  if(disparo == true){
    xd = xd + 12;
    if(xd>600){
      xd = x;
      disparo = false;
    }  
  }
}
