import { Component, OnInit } from '@angular/core';
import {StoreTodosService} from '../store-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(
    private todoStore: StoreTodosService
  ) { }

  isOnlyImportant() {
    return this.todoStore.onlyImportant;
  }

  isOnlyActive() {
    return this.todoStore.onlyActive;
  }

  getItems(){
    return this.todoStore.getItems();
  }

  toggleCompleted(id) {
    this.todoStore.toggleCompleted(id);
  }
  toggleImportant(id){
    this.todoStore.toggleImportant(id);
  }
  toggleOnlyImportant(){
    this.todoStore.toggleOnlyImportant();
  }
  itemDelete(id){
    this.todoStore.itemDelete(id);
  }

  toggleOnlyActive(){
    this.todoStore.toggleOnlyActive();
  }



  ngOnInit(): void {
  }

}
