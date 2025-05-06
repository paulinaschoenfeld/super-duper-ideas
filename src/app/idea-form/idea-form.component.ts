import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IdeaModel} from '../shared/models/IdeaModel';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from '../shared/components/button/button.component';

@Component({
  selector: 'sdi-idea-form',
  imports: [
    FormsModule,
    ButtonComponent
  ],
  templateUrl: './idea-form.component.html',
  styleUrl: './idea-form.component.scss'
})
export class IdeaFormComponent {
  @Input() idea: IdeaModel | undefined;
  @Output() onSave = new EventEmitter<IdeaModel>();
  @Output() onCancel = new EventEmitter();

  public name: string = '';
  public description: string = '';
  public favorite: boolean = false;

  public saveIdea() {
    // @ts-ignore
    const idea: IdeaModel = {
        title: this.name,
        description: this.description,
        favorite: this.favorite
      }
    this.onSave.emit(idea);
  }
}
