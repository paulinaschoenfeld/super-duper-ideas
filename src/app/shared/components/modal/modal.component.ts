import {AfterViewInit, Component, EventEmitter, HostListener, Input, OnDestroy, Output} from '@angular/core';
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
  @Output() onClose = new EventEmitter();
  public isClosing: boolean = false;

  @HostListener('window:keyup.esc', ['$event'])
  onEsc(event: KeyboardEvent) {
    event.preventDefault();
    this.close();
  }

  public close() {
    this.isClosing = true;
    setTimeout(() => {
      this.onClose.emit();
      this.isClosing = false;
    }, 200);
  }
}
