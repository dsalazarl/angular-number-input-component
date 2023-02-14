import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-input',
  standalone: true,
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent implements OnInit {
  @Input() min?: number;
  @Input() max?: number;

  constructor() {}

  ngOnInit() {}
}
