import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {animate, style, transition, trigger} from '@angular/animations';
import {IdeaModel} from '../../models/IdeaModel';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'sdi-accordion',
  imports: [
    IconComponent
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

  public isOpen: boolean = false;

  public toggle() {
    this.isOpen = !this.isOpen;
  }
}
