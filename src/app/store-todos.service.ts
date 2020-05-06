import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreTodosService {
  constructor() {}

  items = [
    {
      id: 1,
      title: 'Купить зубную щетку',
      completed: false,
      important: false,
      category: 'Личные дела',
    },
    {
      id: 2,
      title: 'Отправить запрос POST',
      completed: false,
      important: false,
      category: 'Работа',
    },
    {
      id: 3,
      title: 'Прочитать 12 книг',
      completed: false,
      important: false,
      category: 'Образование',
    },
    {
      id: 4,
      title: 'Загрузить библиотеку',
      completed: false,
      important: false,
      category: 'Работа',
    },
    {
      id: 5,
      title: 'Рисовать',
      completed: false,
      important: false,
      category: 'Хобби',
    },
  ];

  selectedCategory = null;

  onlyImportant = false;

  onlyActive = false;

  toggleOnlyImportant(){
    this.onlyImportant = !this.onlyImportant;
  }

  toggleOnlyActive(){
    this.onlyActive = !this.onlyActive;
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

  getItems() {

    let items;

    if (this.onlyImportant){
      return  items = this.items.filter(item => item.important);
    }
    else {
      items = this.items;
    }
    if (this.onlyActive){
      return  items = this.items.filter(item => item.completed === false);
    }
    else {
      items = this.items;
    }

    if (this.selectedCategory !== null) {
      return this.items.filter(item => item.category === this.selectedCategory);
    }
    return  this.items;
  }



  toggleCompleted(id) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
  }

  toggleImportant(id) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          important: !item.important,
        };
      }
      return item;
    });
  }

  itemDelete(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getCategory() {
    const categories = [];

    this.items.forEach((item) => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    });
    return categories;
  }


}
