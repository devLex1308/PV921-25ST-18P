function Display(sizeX, sizeY){

  let table;
  let _size_x;
  let _size_y;

  this.init = function(arg_X, arg_Y){
    _size_x = arg_X;
    _size_y = arg_Y;

    table = document.createElement("table");
    table.setAttribute('class','display')

    let conteiner = document.getElementById("content");

    console.log(conteiner.innerHTML);
    for (let i = 0; i < _size_y; i++){
      let tr = document.createElement('tr');
      for (let j = 0; j < _size_x; j++){
        let td = document.createElement('td');
        td.setAttribute('id',"td"+j+"_"+i);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    conteiner.appendChild(table);
  }

  this.setPixel = function(x, y){
    let pixel = document.getElementById("td"+x+"_"+y);
    pixel.setAttribute("class", "active");
  }

  this.clearDisplay = function(){
    activCells = table.querySelectorAll(".active");
    for (let i = 0; i < activCells.length; i++){
      activCells[i].setAttribute("class", "");
    }
  }

  this.getSizeX = function(){
    return _size_x;
  }

  this.getSizeY = function(){
    return _size_y;
  }

  this.init(sizeX, sizeY);

}
