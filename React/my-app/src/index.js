


function createCircle (radius) {
return{
    radius,
    draw: function() {
        console.log('Draw Something');
    }
}
}
let circle = createCircle(1);



function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Will you?');
    }
    
}

let another = new Circle(1);