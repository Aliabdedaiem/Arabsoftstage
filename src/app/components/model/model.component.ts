import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'] // Correct the property name to 'styleUrls'
})
export class ModelComponent {
  @Input() isOpen = false;
  @Output() closeModel = new EventEmitter();

  onCloseModel() {
    this.closeModel.emit(false);
  }
}
