var sellingPrice = 200;
var listPrice = 700;
var percentageOFF = ((listPrice - sellingPrice)/listPrice) *100; 
var displayAns = Math.round(percentageOFF);
console.log(displayAns + " % off");

var result = listPrice > sellingPrice ;
console.log(result);