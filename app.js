// Importing express module
const express = require("express");
const app = express();

// Getting Request
app.get("/", (req, res) => {
  // Sending the response
  res.send("Hello World!");

  // Ending the response
  res.end();
});

// Establishing the port
const PORT = process.env.PORT || 5000;

// Executing the server on given port number
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// -----------------------
const fs = require("fs");

let usersjson = fs.readFileSync("users.json");
let users = JSON.parse(usersjson);

users[0].count++;
users[0].last_id++;
obj = {
  id: users[0].last_id,
  email: "esh999hh1@gmail.com",
};
state = 0;

users.forEach((element) => {
  if (element.email === obj.email) {
    state = 1;
    console.log("you are register before");
    // alert("you are signed before.");
  }
});

if (state == 0) {
  users.push(obj);
  newdata = JSON.stringify(users);

  fs.writeFileSync("users.json", newdata);

  console.log("register successfull");
  // alert("register successfull.");
}
