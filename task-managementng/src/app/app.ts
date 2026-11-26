import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { runCalculatorDemo } from './calculator.helper';
import { runTaskInterfacesDemo } from './task-interfaces.helper';
import { Manager } from './bankacc.classexample';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('task-managementng');

  ngOnInit(): void {
    //runCalculatorDemo();
    runTaskInterfacesDemo();

    const mgr = new Manager("moinuddin chisti", "Engineering", 120000);
    console.log(mgr.name);         // Allowed: public
    // console.log(mgr.department); // Error: protected
    // console.log(mgr.salary);     // Error: private


  }
}
