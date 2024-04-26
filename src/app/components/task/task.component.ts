import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  taskId: any;
  task:any;

  constructor(public route:ActivatedRoute,
    public taksSer:TasksService,
    public router:Router) { }

  ngOnInit(): void {
    this.taskId= this.route.snapshot.paramMap.get('id')
    this.task=this.taksSer.tasks[this.taskId]
  }

  saveTask(){
    this.taksSer.editTask(this.taskId, this.task)
    this.router.navigate(['/'])

  }

  deletetTask(){
    this.taksSer.deleteTask(this.taskId)
    this.router.navigate(['/'])
  }
}
