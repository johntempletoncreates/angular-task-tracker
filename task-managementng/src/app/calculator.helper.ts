console.log('Calculator demo started');
interface Calculator {
  add(a: number, b: number): number;
  subtract: (a: number, b: number) => number;
}

export class BasicCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract = (a: number, b: number): number => {
    return a - b;
  };
}

export function runCalculatorDemo(): void {
  const calc: Calculator = {
    add(a, b) {
      return a + b;
    },
    subtract: (a, b) => a - b,
  };

  console.log('Object literal add:', calc.add(10, 5));
  console.log('Object literal subtract:', calc.subtract(10, 5));

  const classCalc: Calculator = new BasicCalculator();
  console.log('Class add:', classCalc.add(10, 5));
  console.log('Class subtract:', classCalc.subtract(10, 5));
}
