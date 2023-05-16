function random() {
    switch (arguments.length) {
        case 0:
            return Math.random();
            break;
        case 1:
            return Math.random() * arguments[0];
            break;
        case 2:
            return arguments[0] + Math.random() * (arguments[1] - arguments[0]);
            break;
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
