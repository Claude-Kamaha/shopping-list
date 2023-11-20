import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients = [] =
    [
      {
        name: "cumcumber",
        amount: 100
      },
      {
        name: "onion",
        amount: 50
      }
    ];
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient)
  }
}
