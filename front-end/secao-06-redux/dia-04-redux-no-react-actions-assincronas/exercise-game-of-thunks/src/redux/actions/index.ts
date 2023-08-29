import { CharacterType, Dispatch } from "../../types";

export const searchBegin = () => (
  { type: 'SEARCH_BEGIN' }
);

export const searchSuccess = (character: CharacterType) => (
  { type: 'SEARCH_SUCCESS', payload: character }
);

export const searchFailure = (error: string) => (
  { type: 'SEARCH_ERROR', payload: error }
);

export function thunkCharacter(name: string) {

  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchBegin());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data: CharacterType[] = await response.json();
      const character: CharacterType = {
        name: data[0].name,
        born: data[0].born,
        titles: data[0].titles,
        aliases: data[0].aliases,
      }
      dispatch(searchSuccess(character));
    } catch (error: any) {
      dispatch(searchFailure(error));
    }
  };
}
