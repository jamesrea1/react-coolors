import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { HeaderContainer, Logo } from './styles/header';
import { Nav, NavLink } from 'components/common/Nav';
import logo from 'assets/logo.svg';

const HeaderNav = styled(Nav)`
  height: 100%;
  position: absolute;
  top: 0;
  right: 14px;
  bottom: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo as={Link} to="/">
        <img src={logo} alt="Logo" />
      </Logo>
      <HeaderNav>
        <NavLink as={RouterNavLink} to="/" activeClassName="is-active">
          Generate
        </NavLink>
        <NavLink as={RouterNavLink} to="/explore" activeClassName="is-active">
          Explore
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
