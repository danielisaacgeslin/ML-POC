import * as React from 'react';

import { ItemModel } from '../../models';
import './list-item.css';

export interface Props {
  item: ItemModel;
}

export default class ListItem extends React.Component<Props, any> {
  public render(): JSX.Element {
    const { item } = this.props;
    return (
      <div className="ListItem row">
        <div className="col-xs-2 col-md-2 col-sm-2 col-xs-12">
          <img className="ListItem__image img-fluid" src={item.thumbnail} alt={item.title} />
        </div>
        <div className="col-xs-8 col-md-8 col-sm-8 col-xs-12">
          <h3 className="ListItem__price">$ {item.price.amount}</h3>
          <h2 className="ListItem__title">{item.title}</h2>
        </div>
        <div className="col-xs-2 col-md-2 col-sm-2 col-xs-12">
          <p className="ListItem__address">{item.address.city_name}</p>
        </div>
      </div>
    );
  }
}