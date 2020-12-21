import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import BasketDropDown from '../basket-dropdown/basket-dropdown.component';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectBasketHidden} from '../../redux/basket/basket.selectors';

import BasketIcon from '../basket-icon/basket-icon.component';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <BasketIcon />
    </div>
    {hidden ? null : <BasketDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectBasketHidden,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
};
