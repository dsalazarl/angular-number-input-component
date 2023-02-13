import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NumberInputComponent } from './number-input/number-input.component'

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NumberInputComponent],
  template: `
    <!--
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    -->
    <h1 style="text-align: center;">Number Input</h1>
    <app-number-input></app-number-input>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
