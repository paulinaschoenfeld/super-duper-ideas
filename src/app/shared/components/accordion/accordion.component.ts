import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {IdeaModel} from '../../models/IdeaModel';
import {IconComponent} from '../icon/icon.component';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'sdi-accordion',
  imports: [
    IconComponent,
    ButtonComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  animations: [
    trigger('accordionToggle', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('300ms ease', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('300ms ease', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class AccordionComponent {
  @Input() idea!: IdeaModel;
  @Input() set opened(value: boolean) {
    this.isOpen = value;
  };
  @Output() onEdit: EventEmitter<IdeaModel> = new EventEmitter();
  @Output() onFavorite: EventEmitter<IdeaModel> = new EventEmitter();

  public isOpen: boolean = false;

  public toggle() {
    this.isOpen = !this.isOpen;
  }

  public editItem() {
    this.onEdit.emit(this.idea);
  }

  public toggleFavorite() {
    this.onFavorite.emit(this.idea);
  }
}
