import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-input',
  standalone: true,
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent implements OnInit {
  @Input() value: number;
  @Input() onChange: number;

  @Input() min?: number;
  @Input() max?: number;
  @Input() softMax?: number;
  @Input() softMin?: number;
  @Input() step?: number = 1;
  @Input() editable?: boolean;
  @Input() precision?: number;

  constructor() {}

  ngOnInit() {}
}
