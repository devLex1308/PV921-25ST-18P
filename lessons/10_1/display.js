const borderWidth = 0;
function Display(sizeX, sizeY){

  let ctx;
  let _size_x;
  let _size_y;

  let _elementX;
  let _elementY;

  let _width;
  let _height;

  this.init = function(arg_X, arg_Y){

    const canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");

    ctx.strokeStyle = '#ff0000';

    _size_x = arg_X;
    _size_y = arg_Y;

    _width = canvas.offsetWidth - borderWidth * 2;
    _height = canvas.offsetHeight - borderWidth * 2;

    _elementX = _width / arg_X;
    _elementY = _height / arg_Y;

  }

  this.setPixel = function(x, y) {
    ctx.beginPath();
    ctx.arc(x * _elementX, y * _elementY, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }

  this.clearDisplay = function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, _width, _height);
  }

  this.getSizeX = function(){
    return _size_x;
  }

  this.getSizeY = function(){
    return _size_y;
  }

  this.init(sizeX, sizeY);

}
