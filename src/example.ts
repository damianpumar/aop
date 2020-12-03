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

const o = new MyBusinessLogic();

const loggingAspect = (...args: any) => {
  console.log("== Calling the logger function ==");
  console.log("Arguments received: " + args);
};

const printTypeOfReturnedValueAspect = (value: any) => {
  console.log("Returned type: " + typeof value);
};

const aop = new AOP();

aop.before(o, loggingAspect);
aop.afterRunning(o, printTypeOfReturnedValueAspect);

o.add(2, 2);
o.concat("hello", "goodbye");
o.power(2, 3);
