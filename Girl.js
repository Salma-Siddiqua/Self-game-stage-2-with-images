class Girl {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images/Girl.jpg");
        this.girl = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.girl)
    }

    display(){
        var pos = this.girl.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,200,200);
    }
}