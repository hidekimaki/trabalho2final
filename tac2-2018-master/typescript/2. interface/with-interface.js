"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Juca", lastName: "Silva" };
document.body.innerHTML = greeter(user);
