import { Advice, PointCut, Reflection } from "./reflection";

export class AOP {
  private readonly reflection: Reflection;

  public constructor() {
    this.reflection = new Reflection();
  }

  public before(
    target: any,
    method: Function,
    wrapAllMethods: boolean = true,
    methodToWrap?: string
  ) {
    this.reflection.inject(
      target,
      method,
      Advice.BEFORE,
      this.getPointCut(wrapAllMethods),
      methodToWrap
    );
  }

  public after(
    target: any,
    method: Function,
    wrapAllMethods: boolean = true,
    methodToWrap?: string
  ) {
    this.reflection.inject(
      target,
      method,
      Advice.AFTER,
      this.getPointCut(wrapAllMethods),
      methodToWrap
    );
  }

  public around(
    target: any,
    method: Function,
    wrapAllMethods: boolean = true,
    methodToWrap?: string
  ) {
    this.reflection.inject(
      target,
      method,
      Advice.AROUND,
      this.getPointCut(wrapAllMethods),
      methodToWrap
    );
  }

  public afterRunning(
    target: any,
    method: Function,
    wrapAllMethods: boolean = true,
    methodToWrap?: string
  ) {
    this.reflection.inject(
      target,
      method,
      Advice.AFTER_RETURNING,
      this.getPointCut(wrapAllMethods),
      methodToWrap
    );
  }

  private getPointCut = (wrapAllMethods: boolean): PointCut =>
    wrapAllMethods ? PointCut.METHODS : PointCut.METHOD;
}
