import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {routes} from './routes';
import {Recipe1Component} from './recipe1/recipe1.component';
import {Recipe2Component} from './recipe2/recipe2.component';
import {TodoService} from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { ShopListComponent } from './shopList/shopList.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Recipe1Component,
    Recipe2Component,
    ShopListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }