export class Guard {
  public static Require(toValidate: any, message: string) {
    if (toValidate === null) {
      throw new Error(message);
    }
  }
}
