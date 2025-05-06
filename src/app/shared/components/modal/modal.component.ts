import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {IconComponent} from '../icon/icon.component';
import {CdkTrapFocus} from '@angular/cdk/a11y';

@Component({
  selector: 'sdi-modal',
  imports: [
    IconComponent,
    CdkTrapFocus
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title!: string;
  @Input() disableEscClose: boolean = false;
  @Input() disableBackdropClose: boolean = false;
  @Output() onClose = new EventEmitter();
  public isClosing: boolean = false;

  @HostListener('window:keyup.esc', ['$event'])
  onEsc(event: KeyboardEvent) {
    if (!this.disableEscClose) {
      event.preventDefault();
      this.close();
    }
  }

  public close() {
    this.isClosing = true;
    setTimeout(() => {
      this.onClose.emit();
      this.isClosing = false;
    }, 200);
  }
}
