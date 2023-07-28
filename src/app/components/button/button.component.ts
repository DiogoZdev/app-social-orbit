import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText!: string;

  @Input() buttonClass!: "primary" | "secondary" | "neutral";

  @Output() clickEmitter = new EventEmitter();

  emitClick() {
    this.clickEmitter.emit();
  }

}
