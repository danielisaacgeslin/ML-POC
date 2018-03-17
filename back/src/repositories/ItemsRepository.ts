import { get } from 'requestify';

import { ProvideSingleton, inject } from '../ioc';
import { ItemModel, ItemsResponse } from '../models';

@ProvideSingleton(ItemsRepository)
export class ItemsRepository {
  private searchUrl: string = 'https://api.mercadolibre.com/sites/MLA/search';
  private itemUrl: string = 'https://api.mercadolibre.com/items';
  private limit: number = 4;

  public async find(query: string): Promise<ItemsResponse> {
    const res = await get(`${this.searchUrl}?q=${query}&limit=${this.limit}`);
    const body: ItemsResponse = await res.getBody();
    body.results = (body.results || []).map(item => new ItemModel(item));
    return Promise.resolve(body);
  }

  public async findOne(id: string): Promise<ItemModel> {
    const itemRes = await get(`${this.itemUrl}/${id}`);
    const itemBody = await itemRes.getBody();
    let description: string = '';
    if (itemBody.descriptions && itemBody.descriptions.length) {
      const descRes = await get(`${this.itemUrl}/${id}/descriptions/${itemBody.descriptions[0].id}`);
      const descBody = await descRes.getBody();
      description = descBody.trusted_plain_text;
    }
    const descriptionRes = await get(`${this.itemUrl}/${id}`);
    return Promise.resolve(new ItemModel({ ...itemBody, description }));
  }
}
