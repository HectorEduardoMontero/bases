import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 public counter: number = 0;

 increment(value:number): void {
  this.counter+=value;
}

resetcounter(): void {

  this.counter=0
    }


}
