class Kidnapper {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("images/Kidnapper.jpg");
        this.kidnapper = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.kidnapper)
    }

    display(){
        var pos = this.kidnapper.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,260,260);
    }
}