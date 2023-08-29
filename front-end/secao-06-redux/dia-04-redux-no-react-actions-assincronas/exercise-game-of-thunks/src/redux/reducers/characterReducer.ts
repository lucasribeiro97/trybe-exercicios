import { CharacterType } from "../../types";

const INITIAL_STATE = {
  isLoading: false,
  character: '',
  error: null,
};

export type ActionType = {
  type: string,
  payload: CharacterType,
}

function characterReducer(
  state = INITIAL_STATE,
  action: ActionType,
) {
  switch (action.type) {
    case 'SEARCH_BEGIN':
      return {
        ...state,
        isLoading: true,
        character: '',
        error: '',
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        character: action.payload,
        error: '',
      }
    case 'SEARCH_ERROR':
      return {
        ...state,
        isLoading: false,
        character: '',
        error: action.payload,
      }
    default:
      return state;
  }
}

export default characterReducer;
