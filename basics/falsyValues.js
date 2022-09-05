//falsy values .. 
/* undefined
   null
   0
   ''
   NaN*/
/* == and === are both diff in js == are loosely bound
   it does not check the datatype like if we have 2 
   and "2" both are same for it , but in case of 
   === these are diff it also matches datatype this 
   thing in Js is called as coericon .. */ 
   var user = "null";

   if(user){
    console.log("1st Condition is true");
   }

   var user = "2";

   if(user == 2){
    console.log("2nd Condition is true");
   }

   var user = "2";

   if(user === 2){
    console.log("3rd Condition is true");
   }


