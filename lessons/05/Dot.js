function Dot(startX, startY) {
  let _x, _y;

  this.setX = function (x) {
    _x = x;
  }

  this.setY = function (y) {
    _y = y;
  }

  this.getX = function () {
    return _x;
  }

  this.getY = function () {
    return _y;
  }

  this.up = function() {
    _y++;
  }

  this.down = function() {
    _y--;
  }

  this.left = function() {
    _x--;
  }

  this.right = function() {
    _x++;
  }


  const init = function (x, y) {
    _x = x;
    _y = y;
  }

  init(startX, startY);

}