import { Action } from '../config';
import { ItemsActionTypes } from './actions';
import { ItemsState, itemsStateName } from './state';
import { reducerRegistry } from '../config/reducer-registry';

export const itemsReducer = (state = new ItemsState(), action: Action): ItemsState => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_LIST_SUCCESS:
      return new ItemsState({ ...state, list: [...action.payload] });
    case ItemsActionTypes.FETCH_ONE_SUCCESS:
      return new ItemsState({ ...state, featured: action.payload });
    default:
      return state;
  }
};

reducerRegistry.register(itemsStateName, itemsReducer);
