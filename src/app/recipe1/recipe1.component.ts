import {Component} from "@angular/core";
// import {TodoService} from '../todo.service';

@Component({
  selector: 'recipe1',
  templateUrl: './recipe1.component.html',
  styleUrls: ['./recipe1.component.css']
})

export class Recipe1Component {
  public todos = ["картофель", "мука", "соль", "яйца", "растительное масло"];
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