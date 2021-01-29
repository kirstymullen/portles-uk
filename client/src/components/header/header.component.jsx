import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './header.styles';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {PropTypes} from 'prop-types';
import {connect, useSelector} from 'react-redux';
import BasketDropDown from '../basket-dropdown/basket-dropdown.component';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectBasketHidden} from '../../redux/basket/basket.selectors';

import {signOutStart} from '../../redux/user/user.actions';

import BasketIcon from '../basket-icon/basket-icon.component';

const Header = ({signOutStart}) => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectBasketHidden);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={signOutStart}>
            SIGN OUT ({currentUser.displayName})
          </OptionDiv>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <BasketIcon />
      </OptionsContainer>
      {hidden ? null : <BasketDropDown />}
    </HeaderContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  signOutStart: PropTypes.func,
};
