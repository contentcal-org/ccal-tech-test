import { Injectable } from '@angular/core';
import { State, Action, StateContext, StateToken } from '@ngxs/store';
import { Idea } from '@ccal-apps/core';
import { AddIdea, RemoveIdea, UpdateIdea } from './ideas.actions';
import { append, removeItem, updateItem } from '@ngxs/store/operators';
import { mockIdeas } from './ideas.data';

export const IDEAS_STATE_TOKEN = new StateToken<Idea[]>('ideas');

@State<Idea[]>({
  name: IDEAS_STATE_TOKEN,
  defaults: mockIdeas,
})
@Injectable()
export class IdeasState {
  @Action(AddIdea)
  addIdea(ctx: StateContext<Idea[]>, action: AddIdea) {
    return ctx.setState(append([action.idea]));
  }

  @Action(RemoveIdea)
  removeIdea(ctx: StateContext<Idea[]>, action: RemoveIdea) {
    return ctx.setState(removeItem<Idea>((idea) => idea.id === action.ideaId));
  }

  @Action(UpdateIdea)
  updateIdea(ctx: StateContext<Idea[]>, action: UpdateIdea) {
    return ctx.setState(
      updateItem<Idea>((idea) => idea.id === action.idea.id, action.idea)
    );
  }
}
