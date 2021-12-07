document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  ripple.style.animation = "ripple-effect .4s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);
}

let slider;

function setup() {
  //create a variable for canvas so that we can reference it for positioning later
  let canvas = createCanvas(windowWidth, windowHeight);
  //you can specify the position of your element like this. it's best to do most positioning in CSS, but here I'm setting it to the top
  canvas.position(0, 0);
  //you can add a CSS class to something by putting .class after it
  canvas.class("container");
  //set the variable to the createSlider function. createSlider values are: minimum, maximum, starting value.
  slider = createSlider(10, 1000, 0);
  slider.class("slider");
}
function draw() {
  background("PapayaWhip");

  fill("Gold");
  //set the width and height of the ellipse using slider.value
  ellipse(windowWidth / 2, windowHeight / 2, slider.value(), slider.value());
}
