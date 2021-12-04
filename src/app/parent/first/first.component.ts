import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  
@Input() tasks:string[] = [];

  constructor() { }
deleteTask(task:string){
   this.tasks = this.tasks.filter((t) => t!== task)
}

  ngOnInit() {
  }

}
