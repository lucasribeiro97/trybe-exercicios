import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

type ActionType = {
  payload: string,
  type: string,
};

function dogReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        imageURL: '',
      };
    
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: '',
      };
    
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        imageURL: '',
      };

    default:
      return state;
  }
}

export default dogReducer;
