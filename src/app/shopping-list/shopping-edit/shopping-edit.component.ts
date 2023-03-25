import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName', {static: false}) name: ElementRef;
  @ViewChild('ingredientAmount', {static: false}) amount: ElementRef; 
  @Output() ingredient = new EventEmitter<{ingredient: Ingredient}>();

  addIngredient() {
    this.ingredient.emit({ingredient: new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value)});
  }

  constructor() { }

  ngOnInit(): void {
  }
}
