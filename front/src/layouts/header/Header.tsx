import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Logo from '../../assets/Logo_ML.png';
import Search from '../../assets/ic_Search.png';
import './header.css';

interface Props {
  fetchList: (search: string) => void;
}

interface State {
  search: string;
  redirect: boolean;
}

export default class Header extends React.Component<Props, State> {
  public state: State = {
    search: new URLSearchParams(window.location.search).get('search') || '',
    redirect: false
  };

  constructor(props: any) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public componentDidMount(): void {
    if (this.state.search) this.props.fetchList(this.state.search);
  }

  public onSubmit(event: any): void {
    event.preventDefault();
    this.props.fetchList(this.state.search);
    this.setState({ ...this.state, redirect: true });
  }

  public render(): JSX.Element {
    return (
      <div className="Header">
        {this.state.redirect && <Redirect to={`/items?search=${this.state.search}`} />}
        <div className="container">
          <div className="row">
            <img src={Logo} alt="" />
            <form className="col" onSubmit={this.onSubmit}>
              <div className="input-group">
                <input
                  placeholder="Nunca dejes de buscar"
                  className="Header__input col"
                  value={this.state.search}
                  onChange={event => this.setState({ ...this.state, search: event.target.value })}
                />
                <button className="Header__btn input-group-addon">
                  <img src={Search} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}