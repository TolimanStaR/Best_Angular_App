import {Component} from "@angular/core";

@Component({
  selector: 'recipe2',
  templateUrl: './recipe2.component.html',
  styleUrls: ['./recipe2.component.css']
})
export class Recipe2Component {
  public todos = ["Мука", "вода", "молоко", "яйца", "дрожжи", "масло для жарки"];
  public count = 0;

  get items() {
    return this.todos;
  }

  addTodo(todo: string) {
    this.count += 1;
    var keys = Object.keys(localStorage), i = 0, key, flag = false;

    for (; key = keys[i]; i++) {
        if (todo === localStorage.getItem(key)) {
        flag = true;
        break;
        }
    }
    if (!flag) {
      localStorage.setItem(this.count+"", todo);
      console.log(this.count, todo);
    }
  }
}