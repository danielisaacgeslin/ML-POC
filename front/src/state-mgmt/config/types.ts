import { ItemModel } from '../../models';

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  items: { list: ItemModel[], featured: ItemModel };
}

export type Reducer<T> = (state: T, action: Action) => T;
export type Effect = (action: Action) => void;
