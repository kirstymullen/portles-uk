import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './header.styles';
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
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <BasketIcon />
    </OptionsContainer>
    {hidden ? null : <BasketDropDown />}
  </HeaderContainer>
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
