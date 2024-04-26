import { TasksService } from 'src/app/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  constructor(public tasksSer: TasksService,
     public router:Router) { }

  ngOnInit(): void {
  }
  saveTask( title: { value: string; }, des: { value: string; } ){
   this.tasksSer.saveTask(title.value,des.value)
   this.router.navigate(['/'])
  }

}
