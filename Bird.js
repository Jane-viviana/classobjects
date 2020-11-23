class Bird {
    constructor(x,y){

        var options = {
            'restitution': 1,
            'friction': 0.8,
            'density': 2

        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.body.position.x = mouseX;
        this.body.position.y=mouseY;
        World.add(world,this.body);
    }

display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    
    rectMode(CENTER);
    push();
     translate(pos.x,pos.y); 
     angleMode(RADIANS);
    rotate(angle);
    fill("red");
    //stroke("green");
    rect(0,0, this.width, this.height);
    pop();
}
}