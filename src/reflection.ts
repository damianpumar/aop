import { Guard } from "./guard";

export enum Advice {
  BEFORE = "before",
  AFTER = "after",
  AROUND = "around",
  AFTER_RETURNING = "afterReturning",
}

export enum PointCut {
  METHOD = "method",
  METHODS = "methods",
}

export class Reflection {
  public inject(
    target: any,
    aspect: Function,
    advice: Advice,
    pointCut: PointCut,
    method?: string
  ) {
    if (pointCut === PointCut.METHOD) {
      Guard.Require(
        method,
        "Trying to add an aspect to a method, but no method specified"
      );

      this.replaceMethod(target, method!, aspect, advice);
    }

    if (pointCut === PointCut.METHODS) {
      const methods = this.getMethods(target);
      methods.forEach((m: string) => {
        this.replaceMethod(target, m, aspect, advice);
      });
    }
  }

  private replaceMethod(
    target: any,
    methodName: string,
    aspect: any,
    advice: Advice
  ) {
    const originalCode = target[methodName];

    target[methodName] = (...args: any) => {
      const returnedValue = originalCode.apply(target, args);

      if ([Advice.BEFORE, Advice.AROUND].includes(advice)) {
        aspect.apply(target, args);
      }

      if ([Advice.AFTER, Advice.AROUND].includes(advice)) {
        aspect.apply(target, args);
      }

      if (Advice.AFTER_RETURNING === advice) {
        return aspect.apply(target, [returnedValue]);
      }

      return returnedValue;
    };
  }

  private getMethods(obj: any) {
    return Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter(
      (item) => typeof obj[item] === "function"
    );
  }
}
