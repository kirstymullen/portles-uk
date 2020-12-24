import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 0 10px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 80px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.96);
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`;

export const LogoContainer = styled(Link)`
  margin-right: 25px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
