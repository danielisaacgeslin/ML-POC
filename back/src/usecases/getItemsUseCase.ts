import { ProvideSingleton, inject } from '../ioc';
import { ItemModel } from '../models';
import { ItemsRepository } from '../repositories';

@ProvideSingleton(GetItemsUseCase)
export class GetItemsUseCase {

  constructor(@inject(ItemsRepository) private itemsRepository: ItemsRepository) { }

  public async getById(id: string): Promise<ItemModel> {
    return this.itemsRepository.findOne(id);
  }

  public async find(query: string): Promise<ItemModel[]> {
    return (await this.itemsRepository.find(query)).results;
  }
}
