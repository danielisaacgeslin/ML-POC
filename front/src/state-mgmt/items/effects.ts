import MLService from '../../services/ML.service';
import { store, Action, Effect, effectRegistry } from '../config';
import { ItemsActionTypes, itemsActions } from './actions';
import { ItemModel } from '../../models';

const fetchListEffect: Effect = async (action: Action): Promise<void> => {
  const list: ItemModel[] = await MLService.fetchList(action.payload);
  store.dispatch(itemsActions.fetchListSuccess(list));
};

const fetchOneEffect: Effect = async (action: Action): Promise<void> => {
  store.dispatch(itemsActions.fetchOneSuccess(null));
  const item: ItemModel = await MLService.fetchOne(action.payload);
  store.dispatch(itemsActions.fetchOneSuccess(item));
};

effectRegistry.register(ItemsActionTypes.FETCH_LIST, fetchListEffect);
effectRegistry.register(ItemsActionTypes.FETCH_ONE, fetchOneEffect);
