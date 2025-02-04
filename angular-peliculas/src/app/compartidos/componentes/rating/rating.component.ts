import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  // ngOnInit(): void {
  //   this.total_rating_selected = Array(this.max_rating).fill(0);
  // }

  @Input({required: true, transform: (value: number) => Array(value).fill(0)})
  max_rating!: number[];

  @Input()
  selected_rating: number = 0;

  @Output()
  votado = new EventEmitter<number>();

  // total_rating_selected: any[] = [];
  prev_rating: number = 0;

  handleMouse(index: number) {
    this.selected_rating = index + 1;
  }
  handleMouseLeave() {
    if (this.prev_rating !== 0) {
      this.selected_rating = this.prev_rating;
    } else {
      this.selected_rating = 0;
    }
  }
  handleClick(index: number) {
    this.selected_rating = index + 1;
    this.prev_rating = index + 1;
    this.votado.emit(this.selected_rating);
  }
}
