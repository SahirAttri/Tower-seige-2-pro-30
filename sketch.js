const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground, miniG, miniG2
var block1,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16

var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32
var hexa_image, hexa

var chain

function preload() {
  
  hexa_image=loadImage("polygon.png")

}



function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
 

    ground= new Ground(400,580,1000,20)
    miniG= new Ground(640,450,250,20)
    miniG2= new Ground(330,450,250,20)

    block1=new Block1(240,425,30,30)
    block2=new Block1(270,425,30,30)
    block3=new Block1(300,425,30,30)
    block4=new Block1(330,425,30,30)
    block5=new Block1(360,425,30,30)
    block6=new Block1(390,425,30,30)
    block7=new Block1(420,425,30,30)

    block8=new Block1(270,395,30,30)
    block9=new Block1(300,395,30,30)
    block10=new Block1(330,395,30,30)
    block11=new Block1(360,395,30,30)
    block12=new Block1(390,395,30,30)

    block13=new Block1(300,365,30,30)
    block14=new Block1(330,365,30,30)
    block15=new Block1(360,365,30,30)

    block16=new Block1(330,335,30,30)


    block17=new Block2(580,225,30,30)
    block18=new Block2(610,225,30,30)
    block19=new Block2(640,225,30,30)
    block20=new Block2(670,225,30,30)
    block21=new Block2(700,225,30,30)

   block22=new Block2(610,195,30,30)
  block23=new Block2(640,195,30,30)
    block24=new Block2(670,195,30,30)

    block25=new Block2(640,165,30,30)

  

    hexa=Bodies.circle(50,200,20)
    World.add(world,hexa)

    chain=new Chain(hexa,{x:400,y:200})

    


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(204,243,224));

  ground.display()
  miniG.display()
  miniG2.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()

  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()

  block13.display()
  block14.display()
  block15.display()

  block16.display()



  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()

  block22.display()
  block23.display()
  block24.display()

  block25.display()

  chain.display()

  

  //fill("yellow")
    imageMode(CENTER)
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)
  

 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}
