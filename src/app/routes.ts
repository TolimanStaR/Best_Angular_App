import {Routes} from "@angular/router";
import {Recipe1Component} from "./recipe1/recipe1.component";
import { ShopListComponent } from './shopList/shopList.component';
import {Recipe2Component} from "./recipe2/recipe2.component";

export const routes: Routes = [
  {
    path: 'recipe1',
    component: Recipe1Component,
  },
  {
    path: 'recipe2',
    component: Recipe2Component,
  },
  {
    path: 'shopList',
    component: ShopListComponent,
  }
];