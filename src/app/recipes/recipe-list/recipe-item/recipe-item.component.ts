import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() itemClicked = new EventEmitter<{recipe: Recipe}>();

  recipeClicked(recipe: Recipe) {
    this.itemClicked.emit({recipe: recipe});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
