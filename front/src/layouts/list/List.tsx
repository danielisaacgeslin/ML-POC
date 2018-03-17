import * as React from 'react';
import { Link } from 'react-router-dom';

import { ItemModel } from '../../models';
import ListItem from './ListItem';
import './list.css';

export interface Props {
  list: ItemModel[];
}

export default class List extends React.Component<Props, any> {
  public render(): JSX.Element {
    return (
      <div className="List container">
        <ul className="List__item_container">
          {this.props.list.map((item: ItemModel, i: number) => (
            <div key={i}>
              <Link to={`/items/${item.id}`}><ListItem item={item} /></Link>
              {i < this.props.list.length - 1 && <div className="List__separator" />}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}