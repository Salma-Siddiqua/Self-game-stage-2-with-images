class Boss {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images/Boss.jpg");
        this.boss = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.boss)
    }

    display(){
        var pos = this.boss.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,230,230);
    }
}