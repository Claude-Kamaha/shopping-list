import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients = []=
  [
    {
      name:"cumcumber",
      amount:100
    },
    {
      name:"onion",
      amount:50
    }
  ];
}
