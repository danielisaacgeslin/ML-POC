import { connect } from 'react-redux';

import { State, itemsActions } from '../../state-mgmt';
import { ItemModel } from '../../models';
import Detail from './Detail';

const mapStateToProps = (state: State): { featured: ItemModel } => ({
  featured: state.items.featured
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchOne: (id: string): void => dispatch(itemsActions.fetchOne(id))
});

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);
export default ListContainer;
