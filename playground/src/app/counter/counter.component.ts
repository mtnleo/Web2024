import { Component } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 counterValue: number = 0;

 up() {
  this.counterValue++;
 }

 down() {
  this.counterValue--;
 }
}
