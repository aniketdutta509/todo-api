import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  public list:any=[]

  constructor(private emp:TodoService) { }

  ngOnInit(): void {
    this.list=this.emp.getEmployee()
  }

}
