import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IdeaModel} from '../shared/models/IdeaModel';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonComponent} from '../shared/components/button/button.component';

@Component({
  selector: 'sdi-idea-form',
  imports: [
    FormsModule,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './idea-form.component.html',
  styleUrl: './idea-form.component.scss'
})
export class IdeaFormComponent implements OnChanges {
  @Input() idea: IdeaModel | undefined;
  @Output() onSave = new EventEmitter<IdeaModel>();
  @Output() onCancel = new EventEmitter();

  public ideaForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    favorite: new FormControl(false)
  })

  ngOnChanges() {
    if (this.idea) {
      this.ideaForm.patchValue(this.idea);
    }
  }

  public saveIdea() {
    if (this.ideaForm.invalid) return;

    const formValue = this.ideaForm.value as {
      title: string,
      description: string,
      favorite: boolean,
    };
    const idea: IdeaModel = {
      id: this.idea?.id || Date.now(),
      title: formValue.title,
      description: formValue.description,
      favorite: formValue.favorite
    }
    this.onSave.emit(idea);
  }
}
