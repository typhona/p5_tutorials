function Particle(x, y) {
  this.x = x;
  this.y = y;

   this.history = [];

  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    for (let i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);

    }

    var v = createVector(this.x,this.y);
      this.history.push(v);
      if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
    // console.log(v);
  }

  this.show = function() {
    stroke(52);
    fill(255, 150);
    ellipse(this.x, this.y, 24, 24)
    noFill();
    beginShape();
    for (let i = 0; i < this.history.length; i ++) {
      let pos = this.history[i];
      // fill(random(255), random(255), random(255));
      // ellipse(pos.x, pos.y, i, i);
      vertex(pos.x, pos.y);
      endShape();
      }
  }
}
