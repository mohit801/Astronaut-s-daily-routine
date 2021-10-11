var bg,sleep,brush,gym,drink,bath,move,astronaut;
function preload() {
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  bg= loadImage("iss.png");
  gym = loadAnimation("gym1.png","gym2.png");
  gym1 = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move1.png");
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300,300);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  drawSprites();
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
 
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  textSize(10);
  fill("yellow");
  text("Instructions:",80,30);
  text("UP ARROW = BRUSHING",80,40);
  text("DOWN ARROW = GYMMING",80,50);
  text("LEFT ARROW = EATING",80,60);
  text("RIGHT ARROW = BATHING",80,70);
  text("M KEY = MOVING",80,80);
  
}