import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string): void {
    console.log(message);
  }

  logErrorCustom(message: string): void {
    this.log(message)
    const date = new Date().toISOString();
    console.error(`
      Date Error:---------------------
      [${date}]
      Message ------------------------
      ${message}
      Stack: ------------
      ${new Error().stack}`);
  }

  warn(message: string): void {
    console.warn(message);
  }
}