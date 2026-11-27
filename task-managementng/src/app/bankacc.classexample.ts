
export class Employee {
  public name: string;
  protected department: string;
  private salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  public getPayslip(): string {
    // Allowed: inside Employee
    return `${this.name} (${this.department}): ₹${this.salary}`;
  }
}

export class Manager extends Employee {
  changeDepartment(newDept: string): void {
    this.department = newDept; // Allowed: protected is accessible in subclasses
    // this.salary = 0;        // Error: 'salary' is private to 'Employee'
  }
}

const mgr = new Manager("muinuddin chisti", "Engineering", 120000);
console.log(mgr.name);         // Allowed: public
// console.log(mgr.department); // Error: protected
// console.log(mgr.salary);     // Error: private
//
