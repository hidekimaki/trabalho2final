// Uma função
function greeter(person: string) {
    return "Hello, " + person;
}

// Uma variável
let user:string = "Ricardo";
user = "Juca";

// Alterando um elemento HTML por meio do DOM
document.body.innerHTML = greeter(user);
