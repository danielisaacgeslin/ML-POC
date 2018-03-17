import { connect } from 'react-redux';

import { State, itemsActions } from '../../state-mgmt';
import Header from './Header';

const mapStateToProps = (state: State): {} => ({});

const mapDispatchToProps = (dispatch: any) => ({
  fetchList: (search: string): void => dispatch(itemsActions.fetchList(search))
});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
