import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentTask: string[] = ['first','second','third']

  constructor() {}

  checkTasks() {
    console.log(this.parentTask)
  }
  ngOnInit() {
  }

}
