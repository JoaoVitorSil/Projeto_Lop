/* 
    Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa7
*/

var x = 200, y = 350;
var xd = 0, yd = 0;
var xo = []; yo = [];
var xi = []; yi = [];
var qt = 2;
var raiod = 10, raiojg = 50, raiob = 30, raior = 30;
var pontos = 0;
var vidas = 5;
var veljg = 7;
var vel = 5;
var s = 0;
var contvel = 1;
var disparo = false;
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  for(var i=0 ; i<qt; i++){
     xo[i] = random(20 , 380);
     yo[i] = -random(600,100);
  }
  for(var cont=0 ; cont<1; cont++){
    xi[cont] = random(20 , 380);
    yi[cont] = -random(1000,600);
  }  
}

function draw() {
  background(180);
  ellipse(x, y, raiojg, raiojg);
  text('Vidas: '+vidas,10, 390);
  text('Pontos: '+pontos, 340, 390);
  text('Velocidade: '+contvel, 160, 390);
  if(x>25){
    if(keyIsDown(LEFT_ARROW)){
        x = x - veljg;  
    }
  }
  if(x<375){
    if(keyIsDown(RIGHT_ARROW)){
        x = x + veljg;  
    }
  }
  
  if(keyIsDown(32) && disparo == false){
    xd = x;
    yd = y;
    disparo = true;
  }
  if(disparo == true){
    ellipse(xd, yd, raiod, raiod);
    yd = yd - 20;
    if(yd<0){
      yd = y;
      disparo = false;
    }  
  } 
  for(var i=0 ; i<qt; i++){
    ellipse(xo[i], yo[i], raiob, raiob);
    yo[i] = yo[i] + vel;
    if(yo[i]>400){
        xo[i] = random(20 , 380);
        yo[i] = -random(600,100);
        vidas--;
    } 
    if(dist(xd+10,yd+10,xo[i]+20,yo[i]+20) <= 20+10){
        xo[i] = random(20 , 380);
        yo[i] = -random(600,100);
        disparo = false;
        pontos++;
    }  
  }
  for(var cont=0 ; cont<1; cont++){
    rect(xi[cont], yi[cont], raiob, raior);
    yi[cont] = yi[cont] + 5;
    if(yi[cont]>400){
        xi[cont] = random(20 , 380);
        yi[cont] = -random(1000,600);
    }
    if(dist(xd+10,yd+10,xi[cont]+30,yi[cont]+30) <= 10+30){
        xi[cont] = random(20 , 380);
        yi[cont] = -random(1000,600);
        disparo = false;
        veljg++;
        contvel++;
    }  
  }
    if(vidas==0){
      for( i=0 ; i<qt; i++){
        xo[i] = random(20 , 380);
        yo[i] = -random(600,100);
      }  
      for( cont=0 ; cont<1; cont++){
        xi[cont] = random(20 , 380);
        yi[cont] = -random(1000,600);
      }
    }  
}
