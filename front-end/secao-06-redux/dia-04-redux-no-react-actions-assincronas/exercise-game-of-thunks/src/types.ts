import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type CharacterState = {
  isLoading: boolean,
  character: CharacterType,
  error: string,
};

export type CharacterType = {
  name: string,
  born: string,
  titles: Array<string>,
  aliases: Array<string>
}

export type Dispatch = ThunkDispatch<CharacterState, null, AnyAction>;
