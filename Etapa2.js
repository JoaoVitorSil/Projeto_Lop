/*
  Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa 2
*/

var x=100, y=100;
function setup() {
  createCanvas(600, 400);
}
ellipse(x,y,20,20)
function draw() {
  background(20);
  
  if(keyIsDown(LEFT_ARROW)){
    x-=10
  }
  if(keyIsDown(RIGHT_ARROW)){
    x+=10
  }
  if(keyIsDown(UP_ARROW)){
    y-=10
  }  
  if(keyIsDown(DOWN_ARROW))
    y+=10
  }
}
