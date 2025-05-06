import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconComponent} from '../icon/icon.component';
import {ICONS} from '../icon/icons';

@Component({
  selector: 'sdi-button',
  imports: [
    IconComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type!: 'action' | 'cancel';
  @Input() label: string = '';
  @Input() icon: keyof typeof ICONS | undefined;
  @Output() onClick = new EventEmitter();

  public isBouncing: boolean = false;

  public clicked() {
    this.isBouncing = true;
    setTimeout(() => {
      this.isBouncing = false;
      this.onClick.emit();
    }, 300);
  }
}
