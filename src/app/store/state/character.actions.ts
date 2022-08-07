export class CharacterAction {
  static readonly type = '[Character] Add item';
  constructor(public payload: string) { }
}
