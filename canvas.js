let canvas;
let n = 2, d = 29;
let nSlider, dSlider, nInput, dInput;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    const mainNodeDOM = canvas.parent();
    canvas.parent("canvas-container");
    mainNodeDOM.remove();

    nSlider =
        createSlider(1, 100, 2, .5)
            .position(30, 30)
            .input(function () {
                n = this.value();
            });;
    dSlider =
        createSlider(1, 100, 29, .5)
            .position(200, 30)
            .input(function () {
                d = this.value();
            });;
    nInput =
        createInput('', 'number')
            .position(35, 55)
            .size(110)
            .input(function () {
                n = this.value();
            });
    dInput =
        createInput('', 'number')
            .position(205, 55)
            .size(110)
            .input(function () {
                d = this.value();
            });;

    angleMode(DEGREES);
}

function draw() {
    nSlider.value(n);
    dSlider.value(d);
    nInput.value(n);
    dInput.value(d);
    translate(width / 2, height / 2);
    background(20);
    stroke(230);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let i = 0; i < 360; i++) {
        const k = i * d;
        const r = 200 * sin(n * k);
        const x = r * cos(k);
        const y = r * sin(k);
        vertex(x, y);
    }
    endShape(CLOSE);

    stroke(color('tomato'));
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < 360; i++) {
        const r = 200 * sin(n * i);
        const x = r * cos(i);
        const y = r * sin(i);
        vertex(x, y);
    }
    endShape(CLOSE);
}