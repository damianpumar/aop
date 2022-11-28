import { AOP } from "./aop";

class MyBusinessLogic {
  add(a: any, b: any) {
    console.log("Calling add");
    return a + b;
  }

  concat(a: any, b: any) {
    console.log("Calling concat");
    return a + b;
  }

  power(a: any, b: any) {
    console.log("Calling power");
    return a ** b;
  }
}

const myObject = new MyBusinessLogic();

const loggingAspect = (...args: any) => {
  console.log("== Calling the logger function ==");
  console.log("Arguments received: " + args);
};

const printTypeOfReturnedValueAspect = (value: any) => {
  console.log("Returned type: " + typeof value);
};

const aop = new AOP();

aop.before(myObject, loggingAspect);
aop.afterRunning(myObject, printTypeOfReturnedValueAspect);

myObject.add(2, 2);
myObject.concat("hello", "goodbye");
myObject.power(2, 3);
