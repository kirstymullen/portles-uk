import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.components';
import PropTypes from 'prop-types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loadingCollections: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionsRef = firestore.collection('collections');
    this.unsubscribeFromSnapShot = collectionsRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({loadingCollections: false});
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapShot != null) {
      this.unsubscribeFromSnapShot();
    }
  }

  render() {
    const {match} = this.props;
    const {loadingCollections} = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={loadingCollections}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={loadingCollections}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

ShopPage.propTypes = {
  match: PropTypes.object,
  updateCollections: PropTypes.func,
};
