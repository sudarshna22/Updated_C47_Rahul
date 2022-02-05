var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount,gameState;

function preload() {
  backgroundImage = loadImage("images/boat background.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

}

function draw() {
  background(backgroundImage);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  
}
