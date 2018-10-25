export default class StdError extends Error {
  public readonly isStdError = true;
  public readonly context?: any;
  public readonly code!: string;
  constructor(message: string, code: string, context?: any) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.context = context;
    Error.captureStackTrace(this, this.constructor);
  }
}
