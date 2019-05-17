/* 
    Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa 6
*/

var x = 275, y = 350;
var xo = 275, yo = 100;
var yd = 0, xd = 0; 
var raioP = 15;
var raioO = 25;
var raioD = 5;
var contVidas = 5;
var pontos = 0;
var nivel = 1;
var disparo = false;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(4,8,4);
  textSize(18);
  fill(400, 400);
  text('Vidas: '+contVidas, 20, 20);
  text('Pontuação: '+pontos, 480, 20);
  text('Nível: '+nivel, 250, 20);
  ellipse( xo, yo, 50, 50);
  ellipse( x, y, 2*raioP, 2*raioP);
   if(x>15){
    if( keyIsDown(LEFT_ARROW) ){
      x = x - 8;
    }
  }
  if(x<585){
    if( keyIsDown(RIGHT_ARROW) ){
      x = x + 8;
    }
  }
  if(y>55){
    if(keyIsDown(UP_ARROW) ){
      y = y - 8;
    }
  }
  if(y<380){
    if( keyIsDown(DOWN_ARROW) ){
      y = y + 8;
    }
  } 
  if(keyIsDown(32) && disparo == false){
     xd = x;
     yd = y;
    disparo = true;
  }  
  if(disparo == true){
    ellipse(xd, yd, 2*raioD, 2*raioD);
    yd = yd - 12;
    if(yd<55){
      yd = y;
      disparo = false;
    } 
  } 
  if(dist(x, y, xo, yo) < raioP+raioO){
      x = 275;
      y = 360;
      contVidas--;
    if(contVidas<0){
      noLoop();
    } 
    }
    if(dist(xd, yd, xo, yo) < raioD+raioO){
      xd = x;
      yd = y;
      pontos++;
      disparo = false;
    }   
}
