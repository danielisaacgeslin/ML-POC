import HttpService from './Http.service';
import { ItemModel } from '../models';

export default class MLService {
  private static url: string = 'http://localhost:3000/api/items';

  public static fetchList(search: string): Promise<ItemModel[]> {
    return HttpService.get(MLService.url, { params: { search } });
  }

  public static fetchOne(id: string): Promise<ItemModel> {
    return HttpService.get(`${MLService.url}/${id}`);
  }
}