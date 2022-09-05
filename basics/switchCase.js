var user = "aaa";

switch(user){
    case "admin":
        console.log("Full Access");
        break;
    case "Sub-admin":
        console.log("Full Access Dlete corse");
        break;
    case "test": 
        console.log("Full test authority");
        break;
    case "user":
        console.log(" Not Full Access");
        break;
    default:
        console.log("Trial user");  

}