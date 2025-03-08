let table = document.getElementById('myTable');

function createTable() {
    //Write your code here
	let rowValue = prompt("Input number of rows");
	let colValue = prompt("Input number of columns");

	rowValue = parseInt(rowValue);
	colValue = parseInt(colValue);
	
	if(isNaN(rowValue) && isNaN(colValue)){
		alert('please enter a valid number')
		return;
	}

	
	if(rowValue < 0 && colValue < 0){
		alert('please enter a positive number')
		return;
	}
	for(let i = 0 ; i<rowValue ; i++){
		let newRow = table.insertRow(i);
		for(let j=0 ; j<colValue ; j++){
			
			let cell = newRow.insertCell(j);
			cell.innerHTML = `Row-${i} Column-${j}`;
		}
	}
	
}
