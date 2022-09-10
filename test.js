const Employee= require("./employee");
// Your code here
//
const john = new Employee("John Wick","Dog Lover");

/*It was at this point that a fella knew, he was stranded*/


setTimeout(john.sayName, 2000); // => undefined says hello
const sayHello = john.sayName;
const johnSaysHello = sayHello.bind(john);

setTimeout(johnSaysHello, 2000); // => John Wick says hello

setTimeout(john.sayOccupation, 3000); // => undefined is a undefined
const sayOccupation = john.sayOccupation;
const johnSaysOccupation = sayOccupation.bind(john);

setTimeout(johnSaysOccupation, 3000);
