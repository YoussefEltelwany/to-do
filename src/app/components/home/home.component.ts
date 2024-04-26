import { TasksService } from 'src/app/services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tasksSer:TasksService) { }

  ngOnInit() {
  }
  deleteTask(i:number): void{
    this.tasksSer.deleteTask(i)
  }
}
