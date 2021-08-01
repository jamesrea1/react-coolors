import styled from 'styled-components/macro';
import { ToolbarContainer } from './styles/toolbar';
import { Nav, NavLink } from 'components/common/Nav';
import { AiOutlineMenu } from 'react-icons/ai';

const ToolbarNav = styled(Nav)`
  padding: 0 14px;
  height: 100%;
  margin-left: auto;
`;

function Toolbar() {
  return (
    <ToolbarContainer>
      <ToolbarNav>
        <NavLink as="button">
          <AiOutlineMenu />
        </NavLink>
      </ToolbarNav>
    </ToolbarContainer>
  );
}

export default Toolbar;
