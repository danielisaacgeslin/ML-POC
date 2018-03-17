import { ItemModel } from '../../models';
import { itemsStateName } from './state';

export const ItemsActionTypes = {
  'FETCH_LIST': `[${itemsStateName}] fetch list`,
  'FETCH_LIST_SUCCESS': `[${itemsStateName}] fetch list success`,
  'FETCH_ONE': `[${itemsStateName}] fetch one`,
  'FETCH_ONE_SUCCESS': `[${itemsStateName}] fetch one success`
};

export const itemsActions = {
  fetchList: (payload: string) => ({ type: ItemsActionTypes.FETCH_LIST, payload }),
  fetchListSuccess: (payload: ItemModel[]) => ({ type: ItemsActionTypes.FETCH_LIST_SUCCESS, payload }),
  fetchOne: (payload: string) => ({ type: ItemsActionTypes.FETCH_ONE, payload }),
  fetchOneSuccess: (payload: ItemModel) => ({ type: ItemsActionTypes.FETCH_ONE_SUCCESS, payload }),
};
