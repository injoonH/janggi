class Board {
  constructor() {
    this.red = [];
    this.blue = [];
    this.set_pieces();
  }

  set_pieces() {
    this.red.push(new General(4, 1, true));
    this.red.push(new Guard(3, 0, true));
    this.red.push(new Guard(5, 0, true));
    this.red.push(new Chariot(0, 0, true));
    this.red.push(new Chariot(8, 0, true));
    this.red.push(new Cannon(1, 2, true));
    this.red.push(new Cannon(7, 2, true));
    this.red.push(new Horse(2, 0, true));
    this.red.push(new Horse(6, 0, true));
    this.red.push(new Elephant(1, 0, true));
    this.red.push(new Elephant(7, 0, true));

    this.red.push(new Soldier(0, 3, true));
    this.red.push(new Soldier(2, 3, true));
    this.red.push(new Soldier(4, 3, true));
    this.red.push(new Soldier(6, 3, true));
    this.red.push(new Soldier(8, 3, true));

    this.blue.push(new General(4, 8, false));
    this.blue.push(new Guard(3, 9, false));
    this.blue.push(new Guard(5, 9, false));
    this.blue.push(new Chariot(0, 9, false));
    this.blue.push(new Chariot(8, 9, false));
    this.blue.push(new Cannon(1, 7, false));
    this.blue.push(new Cannon(7, 7, false));
    this.blue.push(new Horse(2, 9, false));
    this.blue.push(new Horse(6, 9, false));
    this.blue.push(new Elephant(1, 9, false));
    this.blue.push(new Elephant(7, 9, false));

    this.blue.push(new Soldier(0, 6, false));
    this.blue.push(new Soldier(2, 6, false));
    this.blue.push(new Soldier(4, 6, false));
    this.blue.push(new Soldier(6, 6, false));
    this.blue.push(new Soldier(8, 6, false));
  }

  show() {
    for (let r of this.red) r.show();
    for (let b of this.blue) b.show();
  }

  get_piece_at(x, y) {
    for (let r of this.red)
      if (r.alive && r.pos.x == x && r.pos.y == y) return r;
    for (let b of this.blue)
      if (b.alive && b.pos.x == x && b.pos.y == y) return b;
    return null;
  }
}
