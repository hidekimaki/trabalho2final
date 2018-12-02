"use strict";
// Uma função
function greeter(person) {
    return "Hello, " + person;
}
// Uma variável
let user = "Ricardo";
user = "Juca";
// Alterando um elemento HTML por meio do DOM
document.body.innerHTML = greeter(user);
