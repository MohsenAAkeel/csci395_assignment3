//global variables

var rows = 0;
var cols = 0;
var color;
var colorChange = function (){
    this.style.backgroundColor = color;
    };

//functions 

function addR() {
    let grid = document.getElementById("grid");
    let row = document.createElement("tr");
    let col = document.createElement("td");
    
    if(rows === 0){
	col.onclick = color;

	row.appendChild(col);
	grid.appendChild(row);

	rows++;
	cols++;
    }
    else{
	for(let i =0; i<cols; i++){
	    col.onclick = color;
	    row.appendChild(col);	    
	}
    }

    grid.appendChild(row);
    rows++;
}


function addC() {
    let grid = document.getElementById("grid");
    let row = document.createElement("tr");
    let col = document.createElement("td");
    
    if(rows === 0){
	col.onclick = color;

	row.appendChild(col);
	grid.appendChild(row);

	rows++;
	cols++;
    }
    else{
	let tRows = document.getElementsByTagName("tr");
	for(let i =0; i<rows; i++){
	    col.onclick = color;
	    row.appendChild(col);
	    tRows[i].appendChild(col);
	}
	cols++;
    }
}

function removeR() {
    let grid = document.getElementById("grid");
    if(rows === 0 || cols === 0)
	alert("We added a negative row for you. Yes we can.");
    else{
	let lastRow = grid.lastElementChild;
	grid.removeChild(lastRow);
	rows--;
	if (rows === 0)
	    cols = 0;
    }
}

function removeC() {
    let grid = document.getElementById("grid");
    if(rows === 0 || cols === 0)
	alert("We added a negative column for you. Yes we can.");
    else{
	let tRows = document.getElementsByTagName("tr");
	for (let i=0; i <rows; i++)
	    tRows[i].removeChild(tRows[i].lastElementChild);
    }
}
