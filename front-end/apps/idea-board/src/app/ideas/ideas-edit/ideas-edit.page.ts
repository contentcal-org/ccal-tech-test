import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Idea, IdeaTag } from '@ccal-apps/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IdeaTagsState } from '../_stores/idea-tags.state';
import { IdeasState } from '../_stores/ideas.state';
import { CreateIdea, UpdateIdea } from '../_stores/ideas.actions';

@Component({
  templateUrl: './ideas-edit.page.html',
  styleUrls: ['./ideas-edit.page.scss'],
})
export class IdeasEditPage {
  @Select(IdeasState)
  ideas$: Observable<Idea[]>;

  @Select(IdeaTagsState)
  ideaTags$: Observable<IdeaTag[]>;

  constructor(private router: Router, private store: Store) {}

  deleteIdea(ideaId: string): void {
    console.log(`ToDo: Delete Idea ID: ${ideaId}`);
  }

  backToIdeas(): void {
    this.router.navigate(['/ideas']);
  }

  createIdea(idea: Idea): void {
    this.store.dispatch(new CreateIdea(idea));
    this.backToIdeas();
  }

  updateIdea(idea: Idea): void {
    this.store.dispatch(new UpdateIdea(idea));
    this.backToIdeas();
  }
}
