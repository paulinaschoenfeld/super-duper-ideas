import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
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
  @Input() variant!: 'action' | 'cancel' | 'icon';
  @Input() label: string = '';
  @Input() icon: keyof typeof ICONS | undefined;
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() iconColor: string = 'currentColor';
  @Output() onClick = new EventEmitter();

  @HostListener('click', ['$event'])
  onClickHost(event: MouseEvent) {
    event.stopPropagation();
  }

  public isBouncing: boolean = false;

  public clicked() {
    this.isBouncing = true;
    setTimeout(() => {
      this.isBouncing = false;
      this.onClick.emit();
    }, 300);
  }
}
