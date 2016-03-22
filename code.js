//Problem 1


var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

var list = "March, April, May."
for(var i = 0; i<1;i++){
	console.log("Months listed are " + list)
}


//Problem 2
var x = numList.length - 1
console.log(numList[x]);


//Problem 3
console.log(numList.toString());



//Problem 4
var total = 0
for(var j=0;j<numList.length;j++){
	total += (total + numList[j]);
}
console.log(total);

//Problem 5
if(boolList[1]==true){
	var numberList = numList[0] + numList[2];
	console.log(numberList);
}else{
	var multiply = numList[1] * numList[1];
	console.log(multiply);
}

//Problem 6
for(var z=0;z<boolList.length;z++){
	if(boolList[z]==true){
		console.log(numList[z]);
	}
}
