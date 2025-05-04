import { Component } from '@angular/core';
import {AccordionComponent} from '../shared/components/accordion/accordion.component';
import {IdeaModel} from '../shared/models/IdeaModel';
import {MOCK_IDEAS} from '../shared/models/mock-data';
import {IconComponent} from '../shared/components/icon/icon.component';
import {ModalComponent} from '../shared/components/modal/modal.component';

@Component({
  selector: 'sdi-ideas',
  imports: [
    AccordionComponent,
    IconComponent,
    ModalComponent
  ],
  templateUrl: './ideas.component.html',
  styleUrl: './ideas.component.scss'
})
export class IdeasComponent {
  public ideas: IdeaModel[] = MOCK_IDEAS;
  public isBouncing: boolean = false;
  public isModalOpen: boolean = false;

  constructor() {
  }

  public addIdea() {
    this.isBouncing = true;
    setTimeout(() => this.isBouncing = false, 300);
    this.isModalOpen = true;

    // this.ideas.push({
    //   id: this.ideas.length + 1,
    //   title: 'Nowa idea',
    //   description: 'Opis',
    //   favorite: false
    // });
    //
    // this.ideas.sort((a, b) => a.id - b.id > 0 ? -1 : 1);
  }
}
