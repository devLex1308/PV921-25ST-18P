const borderWidth = 1;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

//   ctx.fillStyle = "green";
//   ctx.fillRect(10, 10, 100, 100);
// 
// 
//   ctx.fillStyle = "red";
//   ctx.fillRect(150, 10, 100, 100);

  // console.log(canvas);

  // ctx.moveTo(90, 130);
  // ctx.lineTo(95, 25);
  // ctx.lineTo(150, 80);
  // ctx.lineTo(205, 25);
  // ctx.lineTo(210, 130);
  // ctx.strokeStyle = '#ff0000';
  // ctx.lineWidth = 15;
  // ctx.stroke();
  // createChessBoard(ctx, 8);
  brownianMotion(ctx)
});

function getSizes() {
  const canvas = document.querySelector("#canvas");
  const width = canvas.offsetWidth - borderWidth * 2;
  const height = canvas.offsetHeight - borderWidth * 2;
  return {
    width,
    height
  }
}

function brownianMotion(ctx) {
  const {width, height} = getSizes();
  ctx.strokeStyle = '#ff0000';

  let x = width / 2;
  let y = height /2 ;

  ctx.moveTo(x, y);

  setInterval(() => {
    x += 10;
    y -= 10; 
    ctx.lineTo(x, y);
    ctx.stroke();
  } , 1000);

}






function createChessBoard(ctx, count) {
  const canvas = document.querySelector("#canvas");
  const width = canvas.offsetWidth - borderWidth * 2;
  const height = canvas.offsetHeight - borderWidth * 2;
  
  const widthBlock = width / count;
  const heightBlock = height / count; 

  let x = 0;
  let y = 0;

  const dx = widthBlock;
  const dy = heightBlock;

  let color = 'white';
  let iterator = 0;
  for(let y = 0; y < height; y+= dy) {
    for(let x = 0; x < width; x+= dx) {
      ctx.fillStyle = iterator % 2 == 0
        ? 'white' 
        : 'black';
      ctx.fillRect(x, y, widthBlock, heightBlock);
      iterator++;
    }
    iterator++;
  }


  console.log({ width, height });
  // offsetWidth 
}