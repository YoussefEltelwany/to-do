import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Array<Task>=[]

  constructor() { }
  deleteTask(i: number){
   this.tasks.splice(i,1)

  }
  saveTask(title:string , description:string){
     this.tasks.push({
       title,
       description
     })
  }


editTask(i:any,data:any){
 this.tasks[i]=data
}

}
