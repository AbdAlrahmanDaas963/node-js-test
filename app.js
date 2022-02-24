const fs = require("fs");

let usersjson = fs.readFileSync("users.json");
let users = JSON.parse(usersjson);

users[0].count++;
users[0].last_id++;
obj={
    "id":users[0].last_id,
    "email":"esh999hh1@gmail.com"
}
state=0;

users.forEach(element => {
    if (element.email===obj.email){
        state=1;
        alert("you are signed before.");
    }
});

if (state==0){
    
    users.push(obj);
    newdata = JSON.stringify(users);
    
    fs.writeFileSync("users.json",newdata);
    
    alert("register successfull.");
}
