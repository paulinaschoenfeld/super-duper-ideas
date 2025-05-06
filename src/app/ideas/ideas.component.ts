import { Component } from '@angular/core';
import {AccordionComponent} from '../shared/components/accordion/accordion.component';
import {IdeaModel} from '../shared/models/IdeaModel';
import {MOCK_IDEAS} from '../shared/models/mock-data';
import {ModalComponent} from '../shared/components/modal/modal.component';
import {IdeaFormComponent} from '../idea-form/idea-form.component';
import {ButtonComponent} from '../shared/components/button/button.component';

@Component({
  selector: 'sdi-ideas',
  imports: [
    AccordionComponent,
    ModalComponent,
    IdeaFormComponent,
    ButtonComponent
  ],
  templateUrl: './ideas.component.html',
  styleUrl: './ideas.component.scss'
})
export class IdeasComponent {
  public ideas: IdeaModel[] = MOCK_IDEAS;
  public isModalOpen: boolean = false;

  constructor() {
  }

  public addIdea() {
    this.isModalOpen = true;
  }

  public saveIdea(idea: IdeaModel) {
    this.ideas.unshift(idea);
    this.isModalOpen = false;
  }
}
