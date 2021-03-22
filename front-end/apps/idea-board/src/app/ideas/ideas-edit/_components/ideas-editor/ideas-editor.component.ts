import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Idea, IdeaTag } from '@ccal-apps/core';

@Component({
  selector: 'ccal-ideas-editor',
  templateUrl: './ideas-editor.component.html',
  styleUrls: ['./ideas-editor.component.scss'],
})
export class IdeasEditorComponent {
  ideaForm = new FormGroup({
    id: new FormControl(`idea-${new Date().valueOf()}`, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    tagIds: new FormControl([]),
  });

  @Input()
  idea: Idea = null;

  @Input()
  ideaTags: IdeaTag[] = [];

  @Output()
  createIdea = new EventEmitter<Idea>();

  @Output()
  updateIdea = new EventEmitter<Idea>();

  @Output()
  cancel = new EventEmitter<null>();

  @Output()
  deleteIdea = new EventEmitter<string>();

  onDeleteClick(): void {
    this.deleteIdea.emit(this.ideaForm.get('id').value);
  }

  onCancelClick(): void {
    this.cancel.emit();
  }

  onSaveClick(): void {
    const ideaPayload = this.ideaForm.value;
    this.idea
      ? this.updateIdea.emit(ideaPayload)
      : this.createIdea.emit(ideaPayload);
  }
}
