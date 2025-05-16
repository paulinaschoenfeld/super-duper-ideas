import {Component, inject, OnInit} from '@angular/core';
import {AccordionComponent} from '../shared/components/accordion/accordion.component';
import {IdeaModel} from '../shared/models/IdeaModel';
import {ModalComponent} from '../shared/components/modal/modal.component';
import {IdeaFormComponent} from '../idea-form/idea-form.component';
import {ButtonComponent} from '../shared/components/button/button.component';
import {IdeasService} from '../shared/services/ideas.service';
import {MOCK_IDEAS} from '../shared/models/mock-data';

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
export class IdeasComponent implements  OnInit {
  public ideas: IdeaModel[] = [];
  public ideaToEdit: IdeaModel | undefined = undefined;
  public isModalOpen: boolean = false;

  private ideasService = inject(IdeasService)

  ngOnInit() {
    this.ideas = this.ideasService.getIdeas();
  }

  public addIdea() {
    this.isModalOpen = true;
  }

  public editIdea(idea: IdeaModel) {
    this.ideaToEdit = idea;
    this.isModalOpen = true;
  }

  public toggleFavorite(idea: IdeaModel) {
    idea.favorite = !idea.favorite;
    this.updateItem(idea);
    this.ideasService.updateIdeas(this.ideas);
  }

  public saveIdea(idea: IdeaModel) {
    if (idea.id === this.ideaToEdit?.id) {
      this.updateItem(idea);
    } else {
      this.ideas.unshift(idea);
    }
    this.ideasService.updateIdeas(this.ideas);
    this.isModalOpen = false;
  }

  public updateItem(idea: IdeaModel) {
    const existing = this.ideas.find((item) => item.id === idea.id);
    if (existing) {
      existing.title = idea.title;
      existing.description = idea.description;
      existing.favorite = idea.favorite;
    }
  }
}
