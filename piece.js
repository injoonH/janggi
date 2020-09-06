class Piece {
  constructor(x, y, isRed, name, value, img, size) {
    this.pos = createVector(x, y);
    this.isRed = isRed;
    this.name = name;
    this.value = value;
    this.img = img;
    this.size = size;

    this.alive = true;
  }

  show() {
    if (this.alive) {
      const x = (this.pos.x + 0.5) * tileWidth;
      const y = (this.pos.y + 0.5) * tileWidth;
      image(this.img, x, y, this.size, this.size);
    }
  }

  get_spot(x, y, board) {
    const piece = board.get_piece_at(x, y);
    if (piece == null) return createVector(x, y);
    if (piece.isRed != this.isRed) return createVector(x, y);
    return null;
  }
}

class General extends Piece {
  constructor(x, y, isRed) {
    super(x, y, isRed);
    this.name = "general";
    if (isRed) {
      this.value = 0;
      this.img = images[7];
    } else {
      this.value = 1.5;
      this.img = images[0];
    }
    this.size = tileWidth + 10;
  }

  get_movable_spots(board) {
    let spots = [];
    if (this.pos.x > 3) {
      const spot = this.get_spot(this.pos.x - 1, this.pos.y, board);
      if (spot != null) spots.push(spot);
    }
    if (this.pos.x < 5) {
      const spot = this.get_spot(this.pos.x + 1, this.pos.y, board);
      if (spot != null) spots.push(spot);
    }
    if (this.isRed) {
      if (this.pos.y > 0) {
        const spot = this.get_spot(this.pos.x, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.y < 2) {
        const spot = this.get_spot(this.pos.x, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.x == 4 && this.pos.y == 1) {
        let spot = this.get_spot(3, 0, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 0, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(3, 2, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 2, board);
        if (spot != null) spots.push(spot);
      } else if ((this.pos.x + this.pos.y) % 2 == 1) {
        const spot = this.get_spot(4, 1, board);
        if (spot != null) spots.push(spot);
      }
    } else {
      if (this.pos.y > 7) {
        const spot = this.get_spot(this.pos.x, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.y < 9) {
        const spot = this.get_spot(this.pos.x, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.x == 4 && this.pos.y == 8) {
        let spot = this.get_spot(3, 7, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 7, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(3, 9, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 9, board);
        if (spot != null) spots.push(spot);
      } else if ((this.pos.x + this.pos.y) % 2 == 0) {
        const spot = this.get_spot(4, 8, board);
        if (spot != null) spots.push(spot);
      }
    }
    return spots;
  }
}

class Guard extends Piece {
  constructor(x, y, isRed) {
    super(x, y, isRed);
    this.name = "guard";
    this.value = 3;
    if (isRed) this.img = images[12];
    else this.img = images[5];
    this.size = tileWidth - 30;
  }

  get_movable_spots(board) {
    let spots = [];
    if (this.pos.x > 3) {
      const spot = this.get_spot(this.pos.x - 1, this.pos.y, board);
      if (spot != null) spots.push(spot);
    }
    if (this.pos.x < 5) {
      const spot = this.get_spot(this.pos.x + 1, this.pos.y, board);
      if (spot != null) spots.push(spot);
    }
    if (this.isRed) {
      if (this.pos.y > 0) {
        const spot = this.get_spot(this.pos.x, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.y < 2) {
        const spot = this.get_spot(this.pos.x, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.x == 4 && this.pos.y == 1) {
        let spot = this.get_spot(3, 0, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 0, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(3, 2, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 2, board);
        if (spot != null) spots.push(spot);
      } else if ((this.pos.x + this.pos.y) % 2 == 1) {
        const spot = this.get_spot(4, 1, board);
        if (spot != null) spots.push(spot);
      }
    } else {
      if (this.pos.y > 7) {
        const spot = this.get_spot(this.pos.x, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.y < 9) {
        const spot = this.get_spot(this.pos.x, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.x == 4 && this.pos.y == 8) {
        let spot = this.get_spot(3, 7, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 7, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(3, 9, board);
        if (spot != null) spots.push(spot);
        spot = this.get_spot(5, 9, board);
        if (spot != null) spots.push(spot);
      } else if ((this.pos.x + this.pos.y) % 2 == 0) {
        const spot = this.get_spot(4, 8, board);
        if (spot != null) spots.push(spot);
      }
    }
    return spots;
  }
}

class Chariot extends Piece {
  constructor(x, y, isRed) {
    super(x, y, isRed);
    this.name = "chariot";
    this.value = 13;
    if (isRed) this.img = images[8];
    else this.img = images[1];
    this.size = tileWidth - 10;
  }

  get_movable_spots(board) {
    let spots = [];
    for (let i = this.pos.x - 1; i >= 0; i--) {
      const spot = board.get_piece_at(i, this.pos.y);
      if (spot == null) spots.push(createVector(i, this.pos.y));
      else {
        if (spot.isRed != this.isRed) spots.push(createVector(i, this.pos.y));
        break;
      }
    }
    for (let i = this.pos.x + 1; i <= 8; i++) {
      const spot = board.get_piece_at(i, this.pos.y);
      if (spot == null) spots.push(createVector(i, this.pos.y));
      else {
        if (spot.isRed != this.isRed) spots.push(createVector(i, this.pos.y));
        break;
      }
    }
    for (let i = this.pos.y - 1; i >= 0; i--) {
      const spot = board.get_piece_at(this.pos.x, i);
      if (spot == null) spots.push(createVector(this.pos.x, i));
      else {
        if (spot.isRed != this.isRed) spots.push(createVector(this.pos.x, i));
        break;
      }
    }
    for (let i = this.pos.y + 1; i <= 9; i++) {
      const spot = board.get_piece_at(this.pos.x, i);
      if (spot == null) spots.push(createVector(this.pos.x, i));
      else {
        if (spot.isRed != this.isRed) spots.push(createVector(this.pos.x, i));
        break;
      }
    }
    if (this.pos.x == 4 && this.pos.y == 1) {
      let spot = this.get_spot(3, 0, board);
      if (spot != null) spots.push(spot);
      spot = this.get_spot(5, 0, board);
      if (spot != null) spots.push(spot);
      spot = this.get_spot(3, 2, board);
      if (spot != null) spots.push(spot);
      spot = this.get_spot(5, 2, board);
      if (spot != null) spots.push(spot);
    } else if (this.pos.x == 4 && this.pos.y == 8) {
      let spot = this.get_spot(3, 7, board);
      if (spot != null) spots.push(spot);
      spot = this.get_spot(5, 7, board);
      if (spot != null) spots.push(spot);
      spot = this.get_spot(3, 9, board);
      if (spot != null) spots.push(spot);
      spot = this.get_spot(5, 9, board);
      if (spot != null) spots.push(spot);
    }
    for (let i = -1; i <= 1; i += 2) {
      for (let j = -1; j <= 1; j += 2) {
        if (this.pos.x == 4 + i && this.pos.y == 1 + j) {
          for (let k = 1; k <= 2; k++) {
            const x = this.pos.x - i * k;
            const y = this.pos.y - j * k;
            const spot = board.get_piece_at(x, y);
            if (spot == null) spots.push(createVector(x, y));
            else {
              if (spot.isRed != this.isRed) spots.push(createVector(x, y));
              break;
            }
          }
        } else if (this.pos.x == 4 + i && this.pos.y == 8 + j) {
          for (let k = 1; k <= 2; k++) {
            const x = this.pos.x - i * k;
            const y = this.pos.y - j * k;
            const spot = board.get_piece_at(x, y);
            if (spot == null) spots.push(createVector(x, y));
            else {
              if (spot.isRed != this.isRed) spots.push(createVector(x, y));
              break;
            }
          }
        }
      }
    }
    return spots;
  }
}

class Horse extends Piece {
  constructor(x, y, isRed) {
    super(x, y, isRed);
    this.name = "horse";
    this.value = 5;
    if (isRed) this.img = images[10];
    else this.img = images[3];
    this.size = tileWidth - 10;
  }

  get_movable_spots(board) {
    let spots = [];
    if (
      this.pos.x > 1 &&
      board.get_piece_at(this.pos.x - 1, this.pos.y) == null
    ) {
      if (this.pos.y > 0) {
        const spot = this.get_spot(this.pos.x - 2, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.y < 9) {
        const spot = this.get_spot(this.pos.x - 2, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (
      this.pos.x < 7 &&
      board.get_piece_at(this.pos.x + 1, this.pos.y) == null
    ) {
      if (this.pos.y > 0) {
        const spot = this.get_spot(this.pos.x + 2, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.y < 9) {
        const spot = this.get_spot(this.pos.x + 2, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (
      this.pos.y > 1 &&
      board.get_piece_at(this.pos.x, this.pos.y - 1) == null
    ) {
      if (this.pos.x > 0) {
        const spot = this.get_spot(this.pos.x - 1, this.pos.y - 2, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.x < 8) {
        const spot = this.get_spot(this.pos.x + 1, this.pos.y - 2, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (
      this.pos.y < 8 &&
      board.get_piece_at(this.pos.x, this.pos.y + 1) == null
    ) {
      if (this.pos.x > 0) {
        const spot = this.get_spot(this.pos.x - 1, this.pos.y + 2, board);
        if (spot != null) spots.push(spot);
      }
      if (this.pos.x < 8) {
        const spot = this.get_spot(this.pos.x + 1, this.pos.y + 2, board);
        if (spot != null) spots.push(spot);
      }
    }
    return spots;
  }
}

class Elephant extends Piece {
  constructor(x, y, isRed) {
    super(x, y, isRed);
    this.name = "elephant";
    this.value = 3;
    if (isRed) this.img = images[11];
    else this.img = images[4];
    this.size = tileWidth - 10;
  }

  get_movable_spots(board) {
    let spots = [];
    if (this.pos.x > 2 && this.pos.y > 1) {
      if (
        board.get_piece_at(this.pos.x - 1, this.pos.y) == null &&
        board.get_piece_at(this.pos.x - 2, this.pos.y - 1) == null
      ) {
        const spot = this.get_spot(this.pos.x - 3, this.pos.y - 2, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (this.pos.x > 2 && this.pos.y < 8) {
      if (
        board.get_piece_at(this.pos.x - 1, this.pos.y) == null &&
        board.get_piece_at(this.pos.x - 2, this.pos.y + 1) == null
      ) {
        const spot = this.get_spot(this.pos.x - 3, this.pos.y + 2, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (this.pos.x < 6 && this.pos.y > 1) {
      if (
        board.get_piece_at(this.pos.x + 1, this.pos.y) == null &&
        board.get_piece_at(this.pos.x + 2, this.pos.y - 1) == null
      ) {
        const spot = this.get_spot(this.pos.x + 3, this.pos.y - 2, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (this.pos.x < 6 && this.pos.y < 8) {
      if (
        board.get_piece_at(this.pos.x + 1, this.pos.y) == null &&
        board.get_piece_at(this.pos.x + 2, this.pos.y + 1) == null
      ) {
        const spot = this.get_spot(this.pos.x + 3, this.pos.y + 2, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (this.pos.x > 1 && this.pos.y > 2) {
      if (
        board.get_piece_at(this.pos.x, this.pos.y - 1) == null &&
        board.get_piece_at(this.pos.x - 1, this.pos.y - 2) == null
      ) {
        const spot = this.get_spot(this.pos.x - 2, this.pos.y - 3, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (this.pos.x < 7 && this.pos.y > 2) {
      if (
        board.get_piece_at(this.pos.x, this.pos.y - 1) == null &&
        board.get_piece_at(this.pos.x + 1, this.pos.y - 2) == null
      ) {
        const spot = this.get_spot(this.pos.x + 2, this.pos.y - 3, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (this.pos.x > 1 && this.pos.y < 7) {
      if (
        board.get_piece_at(this.pos.x, this.pos.y + 1) == null &&
        board.get_piece_at(this.pos.x - 1, this.pos.y + 2) == null
      ) {
        const spot = this.get_spot(this.pos.x - 2, this.pos.y + 3, board);
        if (spot != null) spots.push(spot);
      }
    }
    if (this.pos.x < 7 && this.pos.y < 7) {
      if (
        board.get_piece_at(this.pos.x, this.pos.y + 1) == null &&
        board.get_piece_at(this.pos.x + 1, this.pos.y + 2) == null
      ) {
        const spot = this.get_spot(this.pos.x + 2, this.pos.y + 3, board);
        if (spot != null) spots.push(spot);
      }
    }
    return spots;
  }
}

class Cannon extends Piece {
  constructor(x, y, isRed) {
    super(x, y, isRed);
    this.name = "cannon";
    this.value = 7;
    if (isRed) this.img = images[9];
    else this.img = images[2];
    this.size = tileWidth - 10;
  }

  get_movable_spots(board) {
    let spots = [];
    let jumperFound = [false, false, false, false];
    for (let i = this.pos.x - 1; i >= 0; i--) {
      const piece = board.get_piece_at(i, this.pos.y);
      if (jumperFound[0]) {
        if (piece == null) spots.push(createVector(i, this.pos.y));
        else {
          if (piece.name != "cannon" && piece.isRed != this.isRed)
            spots.push(createVector(i, this.pos.y));
          break;
        }
      } else if (piece != null) {
        if (piece.name == "cannon") break;
        jumperFound[0] = true;
      }
    }
    for (let i = this.pos.x + 1; i <= 8; i++) {
      const piece = board.get_piece_at(i, this.pos.y);
      if (jumperFound[1]) {
        if (piece == null) spots.push(createVector(i, this.pos.y));
        else {
          if (piece.name != "cannon" && piece.isRed != this.isRed)
            spots.push(createVector(i, this.pos.y));
          break;
        }
      } else if (piece != null) {
        if (piece.name == "cannon") break;
        jumperFound[1] = true;
      }
    }
    for (let i = this.pos.y - 1; i >= 0; i--) {
      const piece = board.get_piece_at(this.pos.x, i);
      if (jumperFound[2]) {
        if (piece == null) spots.push(createVector(this.pos.x, i));
        else {
          if (piece.name != "cannon" && piece.isRed != this.isRed)
            spots.push(createVector(this.pos.x, i));
          break;
        }
      } else if (piece != null) {
        if (piece.name == "cannon") break;
        jumperFound[2] = true;
      }
    }
    for (let i = this.pos.y + 1; i <= 9; i++) {
      const piece = board.get_piece_at(this.pos.x, i);
      if (jumperFound[3]) {
        if (piece == null) spots.push(createVector(this.pos.x, i));
        else {
          if (piece.name != "cannon" && piece.isRed != this.isRed)
            spots.push(createVector(this.pos.x, i));
          break;
        }
      } else if (piece != null) {
        if (piece.name == "cannon") break;
        jumperFound[3] = true;
      }
    }
    for (let i = -1; i <= 1; i += 2) {
      for (let j = -1; j <= 1; j += 2) {
        if (this.pos.x == 4 + i && this.pos.y == 1 + j) {
          const piece = board.get_piece_at(4, 1);
          if (piece != null) {
            if (piece.name != "cannon") {
              const otherside = board.get_piece_at(4 - i, 1 - j);
              if (otherside == null) spots.push(createVector(4 - i, 1 - j));
              else {
                if (otherside.name != "cannon" && otherside.isRed != this.isRed)
                  spots.push(createVector(4 - i, 1 - j));
                break;
              }
            }
          }
        } else if (this.pos.x == 4 + i && this.pos.y == 8 + j) {
          const piece = board.get_piece_at(4, 8);
          if (piece != null) {
            if (piece.name != "cannon") {
              const otherside = board.get_piece_at(4 - i, 8 - j);
              if (otherside == null) spots.push(createVector(4 - i, 8 - j));
              else {
                if (otherside.name != "cannon" && otherside.isRed != this.isRed)
                  spots.push(createVector(4 - i, 8 - j));
                break;
              }
            }
          }
        }
      }
    }
    return spots;
  }
}

class Soldier extends Piece {
  constructor(x, y, isRed) {
    super(x, y, isRed);
    this.name = "soldier";
    this.value = 2;
    if (isRed) this.img = images[13];
    else this.img = images[6];
    this.size = tileWidth - 30;
  }

  get_movable_spots(board) {
    let spots = [];
    if (this.pos.x > 0) {
      const spot = this.get_spot(this.pos.x - 1, this.pos.y, board);
      if (spot != null) spots.push(spot);
    }
    if (this.pos.x < 8) {
      const spot = this.get_spot(this.pos.x + 1, this.pos.y, board);
      if (spot != null) spots.push(spot);
    }
    if (this.isRed) {
      if (this.pos.y < 9) {
        const spot = this.get_spot(this.pos.x, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
      if (
        (this.pos.x == 3 && this.pos.y == 7) ||
        (this.pos.x == 4 && this.pos.y == 8)
      ) {
        const spot = this.get_spot(this.pos.x + 1, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      } else if (
        (this.pos.x == 5 && this.pos.y == 7) ||
        (this.pos.x == 4 && this.pos.y == 8)
      ) {
        const spot = this.get_spot(this.pos.x - 1, this.pos.y + 1, board);
        if (spot != null) spots.push(spot);
      }
    } else {
      if (this.pos.y > 0) {
        const spot = this.get_spot(this.pos.x, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
      if (
        (this.pos.x == 3 && this.pos.y == 2) ||
        (this.pos.x == 4 && this.pos.y == 1)
      ) {
        const spot = this.get_spot(this.pos.x + 1, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      } else if (
        (this.pos.x == 5 && this.pos.y == 2) ||
        (this.pos.x == 4 && this.pos.y == 1)
      ) {
        const spot = this.get_spot(this.pos.x - 1, this.pos.y - 1, board);
        if (spot != null) spots.push(spot);
      }
    }
    return spots;
  }
}
