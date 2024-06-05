import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 counterValue: number = 0;
 counterTitle: string = "Count It!";

 up() {
  this.counterValue++;
 }

 down() {
  this.counterValue--;
 }
}
