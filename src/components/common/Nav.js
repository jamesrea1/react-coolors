import styled from 'styled-components/macro';

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;
`;

export const NavLink = styled.a`
  position: relative;
  display: flex;
  padding: 0 10px;
  align-items: center;
  font-size: var(--font-size-base);
  color: var(--secondary);

  svg {
    font-size: 20px;
    color: #000;
  }

  &:hover {
    color: var(--secondary-dark);
  }

  &.is-active {
    color: var(--primary);
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--primary);
    }
  }
`;
