class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,30,40);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
   
  score(){
    if(this.visibility<0&&this.visibility>-105){
    
      box1.score();
      box2.score();
      box3.score();
      box4.score();
      box5.score();
      box6.score();
      box7.score();
      box8.score();
      box9.score();
      box10.score();
      box11.score();
      box12.score();
      box13.score();
      box14.score();
      box15.score();
      box16.score();
      box17.score();
      box18.score();
      box19.score();
      box20.score();
      box21.score();
      box22.score();

      score++;

    }
  }


  display() {
    var pos =this.body.position;
  rectMode(CENTER);
  fill("white");
  rect(pos.x, pos.y, this.width, this.height);
    console.log(this.body.speed);
    if(this.body.speed<3){ 
  }
else{
World.remove(world, this.body);
push();
this.visibility = this.visibility-5;
tint (255,this.visibility)
image(this.image,this.body.position.x, this.body.position.y, 50, 50 )
pop();
}

  }
};

