function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill('green');
    noStroke();
  }
  ellipse(mouseX, mouseY, 10, 10);
}
