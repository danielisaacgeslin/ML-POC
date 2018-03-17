import * as React from 'react';

import { ItemModel } from '../../models';
import './detail.css';

interface Props {
  featured: ItemModel;
  fetchOne: (id: string) => void;
}

export default class Detail extends React.Component<Props, any> {
  public componentWillMount(): void {
    const { href } = window.location;
    const id: string = href.substring(href.lastIndexOf('/') + 1, href.length);
    if (id) this.props.fetchOne(id);
  }

  public render(): JSX.Element {
    const { featured } = this.props;
    if (!featured) return <p className="container">loading</p>;
    return (
      <div className="Detail container">
        <div className="Detail__featured row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <img className="Detail__picture img-fluid" src={featured.picture} alt={featured.title} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h1 className="Detail__title">{featured.title}</h1>
            <h3 className="Detail__price">$ {featured.price.amount}</h3>
            <a target="_blank" href={featured.permalink} className="Detail__buy btn">Comprar</a>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <h5 className="Detail__description-title">Descripción del producto</h5>
            <p className="Detail__description">{featured.description}</p>
          </div>
        </div>
      </div>
    );
  }
}