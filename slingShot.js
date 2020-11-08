class Slingshot{
    constructor(body1,cordsB) {
        var options = {
            'bodyA': body1,
            'pointB': cordsB,
            'stiffness':0.04,
            'length':11
        }
            this.sling = Constraint.create(options);
            World.add(world,this.sling)
        

    }
fly(){
    this.sling.bodyA = null;
}

    display(){
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
        

    }

}
