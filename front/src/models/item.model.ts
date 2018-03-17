export interface ItemModel {
  id: string;
  title: string;
  price: { currency: string; amount: number; decimals: number; };
  permalink: string;
  thumbnail: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  categories: string[];
  author: { name: string; lastname: string; };
  address: { state_id: string; state_name: string; city_id: string; city_name: string; };
  description: string;
}
