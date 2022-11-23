import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EddieEsUnGranMaestro';
  // Add text variable for any input
  public input = '';

  public result = '';

  public firstValue: string | undefined;

  public secondValue: string | undefined;

  constructor() {

    this.multiplyLogic();

  }

  // Create method on textareas changed
  public onInputChanged(): void {
    // Get value from event
    this.multiplyLogic();

  }

  // Multiplication Logic
  // Create method that has the logic to to orchestrate the multiplication
  public multiplyLogic(): void {

    this.resetResult();

    // Check if firstValue is null or empty
    if(this.isNullOrEmpty(this.firstValue)) {
      this.addTextToResult("First value is not defined");
      return;
    }

    // Check if secondValue is null or empty
    if(this.isNullOrEmpty(this.secondValue)) {
      this.addTextToResult("Second value is not defined");
      return;
    }

    // Cast firstValue to number
    const firstValueNumber = this.castToNumber(this.firstValue as string);

    // Check if firstValue is a number
    if(!firstValueNumber) {
      this.addTextToResult("First value is not a number");
      return;
    }

    // Cast secondValue to number
    const secondValueNumber = this.castToNumber(this.secondValue as string);

    // Check if secondValue is a number
    if(!secondValueNumber) {
      this.addTextToResult("Second value is not a number");
      return;
    }

    // Multiply firstValue and secondValue
    const result = this.multiply(firstValueNumber, secondValueNumber);

    // Add result to result text
    this.addTextToResult(result.toString());

  }

  // Create method that resets result text
  public resetResult(): void {
    this.result = '';
  }

  // Create method that add text to result text
  public addTextToResult(text: string): void {
    this.result += text;
  }

  // look for the following terms:  variable, type of a variable

  // Create mthod that casts the input to a number and returns the result
  public castToNumber(value : string): number| undefined {
    // if variable is not empty, null or undefined
    if(value && value !== null && value !== undefined) {
      // is value is number
      if(!isNaN(Number(value))) {
        // cast value to number and return it
        return Number(value);
      }}
    // if value is not a number, return undefined
    return undefined;
  }

  // Creathe method that verifies if value is null, empty or undefined
  public isNullOrEmpty(value: string | undefined): boolean {
    if(!value || value === null || value === undefined) {
      return true;
    }
    return false;
  }

  // Create method that multiply two numbers
  public multiply(firstValue: number, secondValue: number): number {
    return firstValue * secondValue;
  }

}
