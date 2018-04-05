export interface State {
  isLoading: boolean;
}
const initialState: State = {
  isLoading: false,
};

export function appReducer (state: State = initialState, action) {
  switch (action.payload) {
    case 'START_LOADING':
      return {
        isLoading: true
      };
    case 'STOP_LOADING':
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
