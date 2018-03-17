import { Route, Controller, Get, Put, Post, Delete, Security, Query, Body } from 'tsoa';

import { ProvideSingleton, inject } from '../ioc';
import { ItemModel } from '../models';
import { GetItemsUseCase } from '../usecases';

@Route('items')
@ProvideSingleton(ItemsController)
export class ItemsController extends Controller {

  constructor(@inject(GetItemsUseCase) private getItemsUseCase: GetItemsUseCase) {
    super();
  }

  @Get('{id}')
  public async getById(id: string): Promise<ItemModel> {
    return this.getItemsUseCase.getById(id);
  }

  @Get()
  public async getItems(@Query('search') search: string): Promise<ItemModel[]> {
    return this.getItemsUseCase.find(search);
  }
}
