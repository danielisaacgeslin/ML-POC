export class ItemModel {
  public id: string = null;
  public title: string = null;
  public price: { currency: string; amount: number; decimals: number; } = null;
  public permalink: string = null;
  public thumbnail: string = null;
  public picture: string = null;
  public condition: string = null;
  public free_shipping: boolean = false;
  public categories: string[] = [];
  public author: { name: string; lastname: string; } = null;
  public address: { state_id: string; state_name: string; city_id: string; city_name: string; } = null;
  public description: string = null;

  constructor(args: any) {
    if (!args) throw new Error('args are missing');
    Object.keys(this).forEach(key => args[key] !== undefined ? this[key] = args[key] : null);
    this.free_shipping = args.shipping && args.shipping.free_shipping;
    this.categories = [args.category_id];
    this.price = {
      currency: args.currency_id,
      amount: args.price,
      decimals: 2
    };
    this.picture = args.pictures && args.pictures[0] && args.pictures[0].secure_url;
  }
}
