import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
  position: relative;
  height: 56px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border-bottom: 1px solid var(--divider);
`;

export const Logo = styled.a`
  position: absolute;
  top:0;
  bottom:0;
  left: 24px;
  display:flex;
  align-items: center;
  img {
    height:18px;
  }
`;



