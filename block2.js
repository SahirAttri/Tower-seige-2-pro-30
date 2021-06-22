class Block2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.01,
            'density':0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");    
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed < 3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);   
          pop();
          
        }

        push();

        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(116,213,106));
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }