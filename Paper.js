class Paper{
     constructor(){
       var options = {
         isStatic:true,
         restitution:0.3,
         friction:0.5,
         density:1.2
       }
       this.body = Bodies.circle(50,260,70,options);
           this.image = loadImage("paper.png");
           World.add(world,this.image);
     }
display(){
  var pos = this.body.position;

  push();
  translate(pos.x,pos.y);
 imageMode(CENTER);
  image(this.image,0,0,70,70);
  pop();
}
}