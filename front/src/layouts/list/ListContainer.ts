import { connect } from 'react-redux';

import { State } from '../../state-mgmt';
import { ItemModel } from '../../models';
import List from './List';

const mapStateToProps = (state: State): { list: ItemModel[] } => ({
  list: state.items.list
});

const mapDispatchToProps = (dispatch: any) => ({});

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListContainer;
