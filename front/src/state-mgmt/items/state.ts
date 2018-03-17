import { ItemModel } from '../../models';

export const itemsStateName: string = 'items';

export class ItemsState {
  public list: ItemModel[] = [];
  public featured: ItemModel = null;

  constructor(args?: ItemsState) {
    if (args) Object.assign(this, args);
  }
}
