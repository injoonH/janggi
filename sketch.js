const tileWidth = 80;
const markerSize = 20;

let palette = {
  board: "#DAA558",
  line: "#000000",
  red: "#BD320D",
  blue: "#273779",
};

let images = [];

let board;

let clicked_piece = null;
let clicked_movable = null;

let redTurn = false;

let turnDiv;
let redScoreDiv;
let blueScoreDiv;

let redScore = 73.5;
let blueScore = 72;

function preload() {
  for (let i = 0; i < 10; i++)
    images.push(loadImage("images/piece0" + i + ".png"));
  for (let i = 10; i < 14; i++)
    images.push(loadImage("images/piece" + i + ".png"));
}

function setup() {
  createCanvas(9 * tileWidth, 10 * tileWidth);
  imageMode(CENTER);
  rectMode(CENTER);

  turnDiv = createDiv("blue's turn");
  redScoreDiv = createDiv("red's score: 73.5");
  blueScoreDiv = createDiv("blue's score: 72");

  board = new Board();
}

function draw() {
  background(palette["board"]);
  draw_grid();
  board.show();

  if (clicked_piece != null) show_movable();

  if (!board.red[0].alive || !board.blue[0].alive) {
    if (board.red[0].alive) turnDiv.html("red won");
    else turnDiv.html("blue won");
    noLoop();
  }
}

function mouseClicked() {
  const x = floor(mouseX / tileWidth);
  const y = floor(mouseY / tileWidth);
  let flag = true;

  if (clicked_piece != null) {
    clicked_piece.size -= 20;
    for (let spot of clicked_movable) {
      if (x == spot.x && y == spot.y) {
        const piece = board.get_piece_at(x, y);
        if (piece != null) {
          if (piece.isRed) {
            redScore -= piece.value;
            redScoreDiv.html(`red\'s score: ${redScore}`);
          } else {
            blueScore -= piece.value;
            blueScoreDiv.html(`blue\'s score: ${blueScore}`);
          }
          piece.alive = false;
        }
        clicked_piece.pos.x = x;
        clicked_piece.pos.y = y;
        flag = false;
        redTurn = !redTurn;

        if (redTurn) turnDiv.html("red's turn");
        else turnDiv.html("blue's turn");
        break;
      }
    }
    clicked_piece = null;
    clicked_movable = null;
  }

  if (flag) {
    const piece = board.get_piece_at(x, y);
    if (piece != null) {
      if (piece.isRed == redTurn) {
        clicked_piece = piece;
        clicked_piece.size += 20;
        clicked_movable = clicked_piece.get_movable_spots(board);
      }
    }
  }
}

function draw_grid() {
  stroke(palette["line"]);
  strokeWeight(1);
  for (let i = 0; i < 10; i++)
    line(
      0.5 * tileWidth,
      (i + 0.5) * tileWidth,
      width - 0.5 * tileWidth,
      (i + 0.5) * tileWidth
    );
  for (let i = 0; i < 9; i++)
    line(
      (i + 0.5) * tileWidth,
      0.5 * tileWidth,
      (i + 0.5) * tileWidth,
      height - 0.5 * tileWidth
    );
  line(3.5 * tileWidth, 0.5 * tileWidth, 5.5 * tileWidth, 2.5 * tileWidth);
  line(5.5 * tileWidth, 0.5 * tileWidth, 3.5 * tileWidth, 2.5 * tileWidth);
  line(3.5 * tileWidth, 7.5 * tileWidth, 5.5 * tileWidth, 9.5 * tileWidth);
  line(3.5 * tileWidth, 9.5 * tileWidth, 5.5 * tileWidth, 7.5 * tileWidth);
}

function show_movable() {
  noFill();
  strokeWeight(2);
  if (clicked_piece.isRed) stroke(palette["red"]);
  else stroke(palette["blue"]);
  for (let spot of clicked_movable) {
    const x = (spot.x + 0.5) * tileWidth;
    const y = (spot.y + 0.5) * tileWidth;
    rect(x, y, markerSize, markerSize);
  }
}
