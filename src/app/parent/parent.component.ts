import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentTask: string[] = ['first','second','third'];

  isloading = true;

  dataLoaded = false;

  constructor() {}

  checkTasks() {
    console.log(this.parentTask)
  }

  // delete(task:string){
  //   this.parentTask = this.parentTask.filter((x) => x !== task)
  // }

  deleteHandler(task:string){
    this.parentTask = this.parentTask.filter((x) => x !== task)
  }

  setloading(){
    this.isloading = true;
    
    setTimeout(() => {
      this.isloading = false;
      this.dataLoaded = true;
    }, 2000)
  }

  currentDate = new Date();

  ngOnInit() {
  }

}
