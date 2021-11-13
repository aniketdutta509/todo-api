import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public list:any=[]

  constructor(private emp1:TodoService) { }

  ngOnInit(): void {
    this.list=this.emp1.getEmployee()
  }

}
