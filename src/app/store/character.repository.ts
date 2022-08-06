import {createStore, Store, withProps} from '@ngneat/elf';
import {
  addEntities,
  deleteEntities,
  selectActiveEntity,
  selectAllEntities,
  setActiveId,
  setEntities,
  updateEntities,
  withActiveId,
  withEntities
} from '@ngneat/elf-entities';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface Character {
  id: number
  firstName: string
  lastName: string
  sprite: any
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CharacterProps {
}

@Injectable({ providedIn: 'root' })
export class CharacterRepository {
  activeCharacter$: Observable<Character | undefined>
  character$: Observable<Character[]>

  private store;

  constructor() {
    this.store = this.createStore()
    this.character$ = this.store.pipe(selectAllEntities())
    this.activeCharacter$ = this.store.pipe(selectActiveEntity())
  }

  setCharacter(character: Character[]) {
    this.store.update(setEntities(character))
  }

  addCharacter(character: Character) {
    this.store.update(addEntities(character))
  }

  updateCharacter(id: Character['id'], character: Partial<Character>) {
    this.store.update(updateEntities(id, character))
  }

  deleteCharacter(id: Character['id']) {
    this.store.update(deleteEntities(id))
  }

  setActiveId(id: Character['id']) {
    this.store.update(setActiveId(id))
  }

  private createStore(): Store {
    return createStore({name: 'character'}, withProps<CharacterProps>({}), withEntities<Character>(), withActiveId())
  }
}
