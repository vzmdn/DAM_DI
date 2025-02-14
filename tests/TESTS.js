let user = {};
console.log(user);
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

/*
let myfunction2 = (a,b) => a*b;

//myFunction(5,8,9,9,8,7,5,2,4,7,6,2);
console.log(myfunction2(9,6))


function myFunction (...args){
    //for(x in args) console.log(args[x]+", ");
    for(x of args) console.log(x+", ");
}



"use strict";

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
);*/