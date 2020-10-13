console.log("main2");

function Game() {
  let display;
  let dot;

  const MOVE_UP = 1;
  const MOVE_DOWN = 2;
  const MOVE_RIGHT = 3;
  const MOVE_LEFT = 4;

  let direction;

  function init() {
    const bodyEl = document.querySelector("#body");

    bodyEl.addEventListener("click", (e) => {
      console.log(e.target.id);
      switch(e.target.id) {
        case "up":
          dot.up();
          direction = MOVE_UP;
          break;
        case "down":
          dot.down();
          direction = MOVE_DOWN;
          break;
        case "left":
          dot.left();
          direction = MOVE_LEFT;
          break;
        case "right":
          dot.right();
          direction = MOVE_RIGHT;
          break;
        default:
          console.log("Це не елемент керування");
          return;
      }
      display.clearDisplay();
      display.setPixel(dot.getX(), dot.getY());

    });

    display = new Display(20, 20);
    dot = new Dot(1, 1);
    display.setPixel(dot.getX(), dot.getY());

    direction = MOVE_RIGHT;
  }


  this.update = function () {
    switch(direction){
      case MOVE_UP:
        dot.up();
        break;
      case MOVE_DOWN:
        dot.down();
        break;
      case MOVE_RIGHT:
        dot.right();
        break;
      case MOVE_LEFT:
        dot.left();
        break;
    }
    display.clearDisplay();
    display.setPixel(dot.getX(), dot.getY());
  }

  init();
}


const game = new Game();

setInterval(game.update, 1000);

// console.log(dot.getX(), dot.getY());

