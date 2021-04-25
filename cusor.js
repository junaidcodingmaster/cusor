class Cusor {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
this.image = loadImage("cusor.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;

      push();

  rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height); 
imageMode(CENTER);
image(this.image,pos.x,pos.y,0,0);
        
        
      console.log("x : " + pos.x);
      console.log("y : " + pos.y);
      
    pop();

    }
  };
