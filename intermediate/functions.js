// a block of code that is re used again and again 
function sayHello(){
    console.log("Hello Js");
}
/* As there is the diff between sayHello()
sayHello as these are 2 diff things 1st is calling 
the function  , but second one is just refering the 
function ..  */ 
 
//sayHello();
//sayHello;
function sayHello(name){
    console.log("Heyy" , name);
}
// thats not a good practice .. :(
sayHello("IITIAN");


function sayHello(name){
    console.log(`heyy ${name}. r u from bs?`);
}
// sayHello("IITIAN");


function namstey(){
    return "namstey JavaScript";
}
var greetings = namstey();
console.log(greetings);

