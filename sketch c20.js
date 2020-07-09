var car,car2,car3,car4wall;
var speed,speed2,speed3,speed4;
var deformation1,deformation2,deformation3,deformation4;

function setup() {
  createCanvas(1600, 400);
  speed=random(10,40);
  speed2=random(5,48);
  speed3=random(26,60);
  speed4=random(19,40);
  wall=createSprite(1500,200,60,400);
  car=createSprite(100,100,50,50);
  car2=createSprite(100,200,50,50);
  car3=createSprite(100,300,50,50);
  car4=createSprite(100,400,50,50);
  car.velocityX=speed;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  car4.velocityX=speed4;
 deformation1=0.5*random(60000,100000)*car.velocityX*car.velocityX/22500;
 deformation2=0.5*random(400,900)*car2.velocityX*car2.velocityX/22500;
 deformation3=0.5*random(10000,30000)*car3.velocityX*car3.velocityX/22500;
 deformation4=0.5*random(200,560)*car4.velocityX*car4.velocityX/22500;
}

function draw(){
background("black")



if(wall.x-car.x < car.width/2 + wall.width/2){
car.velocityX=0
if(deformation1>180){
  car.shapeColor="red";
}
if(deformation1<100){
  car.shapeColor="green";
}
if(deformation1>100 && deformation1<180){
  car.shapeColor="yellow";
}
}

if(wall.x-car2.x<car2.width/2+wall.width/2){
  car2.velocityX=0
  if(deformation2>180){
    car2.shapeColor="red";
  }
  if(deformation2<100){
    car2.shapeColor="green";
  }
  if(deformation2>100 && deformation2<180){
    car2.shapeColor="yellow";
  }
  }

  if(wall.x-car3.x < car3.width/2+wall.width/2){
    car3.velocityX=0
    if(deformation3>180){
      car3.shapeColor="red";
    }
    if(deformation3<100){
      car3.shapeColor="green";
    }
    if(deformation3>100 && deformation3<180){
      car3.shapeColor="yellow";
    }
    }

    if(wall.x-car4.x < car4.width/2+wall.width/2){
      car4.velocityX=0
      if(deformation4>180){
        car4.shapeColor="red";
      }
      if(deformation4<100){
        car4.shapeColor="green";
      }
      if(deformation4>100 && deformation4<180){
        car4.shapeColor="yellow";
      }
      }



  drawSprites();
}