import { Component, Input, OnInit, Output } from '@angular/core';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  
@Input() tasks:string[] = [];
@Output() delete: EventEmitter<string> = new EventEmitter() ;

  constructor() {}

  deletTask (task:string){
    this.delete.emit(task);
  }

  
// deleteTask(task:string){
//    this.tasks = this.tasks.filter((t) => t!== task)
// }       როდესაც შვილი კომპონენტიდან ვშლით

deleteTask(task:string){
  this.delete.emit(task);
}

  ngOnInit() {
  }

}
