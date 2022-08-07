import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { CharacterAction } from './character.actions';

export class CharacterStateModel {
  public items: string[] | undefined;
}

const defaults = {
  items: []
};

@State<CharacterStateModel>({
  name: 'character',
  defaults
})
@Injectable()
export class CharacterState {
  @Action(CharacterAction)
  add({ getState, setState }: StateContext<CharacterStateModel>, { payload }: CharacterAction) {
    const state = getState();
    setState({ items: [ ...state.items || [], payload ] });
  }
}
