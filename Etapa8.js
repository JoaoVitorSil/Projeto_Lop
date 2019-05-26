/* 
    Equipe: 
        João Vitor da Conceição Silva I - Subturma A (Líder) 
        Iago Esron Santiago de Amarante II - Subturma A 
        Etapa 8
*/

var x = 200, y = 350;
var xd = 0, yd = 0;
var xo = []; yo = [];
var xi = []; yi = [];
var qt = 1;
var raiod = 10, raiojg = 50, raiob = 30, raior = 30;
var pontos = 0;
var vidas = 5;
var veljg = 7;
var vel = 5;
var s = 0;
var fase = 1;
var barpt = 10;
var contvel = 1;
var colisão2 = [false]
var colisão = [false, false];
var disparo = false;
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  for(var i=0 ; i<qt; i++){
     xo[i] = random(20 , 380);
     yo[i] = -random(600,100);
  }
  for(var cont=0 ; cont<1; cont++){
    xi[cont] = random(20 , 360);
    yi[cont] = -random(1000,600);
  }  
}

function draw() {
     if(pontos > barpt){
       fase++
        barpt+=10
      }
    background(180);
    ellipse(x, y, raiojg, raiojg);
    text('Vidas: '+vidas,10, 390);
    text('Pontos: '+pontos, 340, 390);
      
    text('Velocidade: '+contvel, 100, 390);
    text('Fase: '+fase, 250, 390);
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
    }
    for( i=0 ; i<qt; i++){
      if(colisão[i] == false){
        if(dist(xd+10,yd+10,xo[i]+30,yo[i]+30) <= 30+10){
            colisão[i] = true
            disparo = false;
            pontos++;
            barpt++;
         }  
      }
    } 
    for( i=0 ; i<qt; i++){
      if(colisão[i] == true){
        xo[i] = random(20 , 380);
        yo[i] = -random(600,100);
        colisão[i] = false
      }  
    }  
    for(var cont=0 ; cont<1; cont++){
      rect(xi[cont], yi[cont], raiob, raior);
      yi[cont] = yi[cont] + 5;
      if(yi[cont]>400){
          xi[cont] = random(20 , 380);
          yi[cont] = -random(1000,600);
      }
    }
      for( cont=0 ; cont<1; cont++){  
        if(colisão2[cont] == false){
            if(dist(xd+5,yd+5,xi[cont]+15,yi[cont]+15) <= 20){
                colisão2[cont] = true
                disparo = false;
                veljg++;
                contvel++;
            }
        }
      } 
      for( cont=0 ; cont<1; cont++){  
            if(colisão2[cont] == true){
                xi[cont] = random(20 , 360);
                yi[cont] = -random(1000,600);
                colisão2[cont] = false
            }  
        } 
          if(contvel==15){
           for( cont=0 ; cont<1; cont++){
            xi[cont] = random(20 , 360);
            yi[cont] = -random(1000,600);
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
      if(pontos == 10 ){
       fase = 2
      } 
      if(fase == 2){
         qt = 2
         vel = 6
      } 
      if(pontos == 20){
         fase = 3 
      } 
      if(fase == 3){
         qt = 3
         vel = 7
      } 
      if(pontos == 30){
         fase = 4 
      } 
      if(fase == 4){
         qt = 4
         vel = 8
      }
      if(pontos == 40){
         fase = 5 
      } 
      if(fase == 5){
         qt = 5
         vel = 9
      } 
  }
