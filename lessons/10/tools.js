const borderWidth = 1;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);


  ctx.fillStyle = "red";
  ctx.fillRect(150, 10, 100, 100);

  // console.log(canvas);
  createChessBoard(ctx, 8);
});


function createChessBoard(ctx, count) {
  const canvas = document.querySelector("#canvas");
  const width = canvas.offsetWidth - borderWidth * 2;
  const height = canvas.offsetHeight - borderWidth * 2;
  console.log({ width, height });
  // offsetWidth 
}