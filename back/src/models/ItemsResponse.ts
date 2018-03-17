import { ItemModel } from './ItemModel';

export interface ItemsResponse {
  site_id: string;
  query: string;
  paging: {
    total: number,
    offset: number,
    limit: number,
    primary_results: number
  };
  results: ItemModel[];
}