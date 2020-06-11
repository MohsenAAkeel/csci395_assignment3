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
    let row = document.createElement('tr');
    let col = document.createElement('td');
    
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
	let totalRows = document.getElementsByTagName("tr");
	for(let i =0; i<rows; i++){
	    col.onclick = color;
	    row.appendChild(col);
	    totalRows[i].appendChild(col);
	}
	cols++;
    }
}
