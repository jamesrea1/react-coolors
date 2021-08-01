import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import chroma from 'chroma-js';
import Toolbar from 'components/Toolbar';
import ColorBox from 'components/ColorBox';

import { ColorsContainer } from './styles/generator';

function Generator(props) {
  const params = useParams();

  // extract colors from path
  const colorParams = params.colors.split('-');

  // validate colors
  const validParams = colorParams.every((c) => chroma.valid(c));
  if (!validParams) {
    return <h1>404</h1>;
  }

  // get colors hex
  const colorsHex = colorParams.map((c) => chroma(c).hex());

  return (
    <div className={props.className}>
      <Toolbar />
      <ColorsContainer>
        {colorsHex && colorsHex.map((color) => <ColorBox hex={color} />)}
      </ColorsContainer>
    </div>
  );
}

export default styled(Generator)`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  height: calc(100% - 56px);
  overflow: hidden;
`;
