import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { runCalculatorDemo } from './calculator.helper';
import { runTaskInterfacesDemo } from './task-interfaces.helper';

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


  }
}
