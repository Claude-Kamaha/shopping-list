import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredients>();


  ngOnInit() {

  }
  onAddItem() {
    const ingName = this.nameInput.nativeElement.value
    const ingAmt = this.amountInput.nativeElement.value
    const newIngredient = new Ingredients(ingName, ingAmt)
    this.ingredientAdded.emit(newIngredient)
  }
}
