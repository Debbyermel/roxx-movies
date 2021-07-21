import React from 'react';
import logo from '../../images/roxx-logo.png'
import { Wrapper, Content, RoxxLogo } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <RoxxLogo src={logo} alt="logo" />
    </Content>
  </Wrapper>
);

export default Header;