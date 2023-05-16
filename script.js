function random() {
    switch (arguments.length) {
        case 0:
            return Math.random();
        case 1:
            return Math.random() * arguments[0];
        case 2:
            return arguments[0] + Math.random() * (arguments[1] - arguments[0]);
        default:
            console.error("too many arguments passed to random()");
    }
}

function makeCircle(x, y, radius, color) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);
    return circle;
}
class Star {
    constructor(xPos, yPos, radius) {
        this.x = xPos;
        this.y = yPos;
        this.r = radius;
        this.animDuration = random(3, 5);
        this.velocityY = random(1, 3);
        //   Add random colours to the particles
        this.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    drawStar(svgCtx) {
        this.svgElement = makeCircle(this.x, this.y, this.r, this.color);
        svgCtx.appendChild(this.svgElement);
        this.addAnimation();
    }
    // Add gravity to the particles so that they fall down naturally onto the bottom of your SVG canvas.
    addAnimation() {
        let animElementX = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animElementX.setAttribute('attributeName', 'cx');
        animElementX.setAttribute('values', `${this.x}; ${random(0, width)};`);
        animElementX.setAttribute('dur', `${this.animDuration}`);
        animElementX.setAttribute('repeatCount', 'indefinite');
        this.svgElement.appendChild(animElementX);

        let animElementY = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animElementY.setAttribute('attributeName', 'cy');
        animElementY.setAttribute('values', `${this.y}; ${random(height / 2, height)};`);
        animElementY.setAttribute('dur', `${this.animDuration}`);
        animElementY.setAttribute('repeatCount', 'indefinite');
        this.svgElement.appendChild(animElementY);
    }
}
//   Generates the stars from the center of the canvas
function createStarArray(num) {
    let starInstances = [];
    for (let i = 0; i < num; i++) {
        let starSize = random(width * 0.005, width * 0.01);
        let xPos = width / 2;
        let yPos = height / 2;

        starInstances.push(new Star(xPos, yPos, starSize));
    }
    return starInstances;
}
let width = window.innerWidth;
let height = window.innerHeight;

const svg = document.getElementById('base-svg');

svg.setAttribute('width', width);
svg.setAttribute('height', height);
svg.style.backgroundColor = 'black';

let stars = createStarArray(100);

for (let star of stars) {
    star.drawStar(svg);
}




