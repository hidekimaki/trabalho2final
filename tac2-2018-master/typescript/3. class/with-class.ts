class Student {
  fullName: string;
  
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }

  public showMessage() {
    alert(this.fullName);
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

user.showMessage();

let input1:HTMLInputElement = document.createElement("input");
input1.setAttribute("type","button");

document.body.appendChild(input1);