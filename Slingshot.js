class Slingshot{
    constructor(bodyA, pointB){
        var property = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        };
    this.slingshot = Constraint.create(property);
    World.add(world, this.slingshot);
    };
    display(){
        if(this.slingshot.bodyA){
         var pointA= this.slingshot.bodyA.position;
        var pointB = this.slingshot.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
};