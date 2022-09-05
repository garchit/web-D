function getUserRole(name , role){
    switch (role){
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is sub-admin with access`
            break;
        case "subadmin":
            return `${name} is sub-admin with access`
            break;
        case "tester":
            return `${name} is tester with access`
            break;
        default :
            return `${name} is trial user `
            break;
    }
}
// here break statement is not necessary .. 
console.log(getUserRole("Hitesh" , "tester"));