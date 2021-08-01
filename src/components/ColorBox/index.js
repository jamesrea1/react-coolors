import { ColorBoxContainer, Background, Content } from './styles/colorBox';

function ColorBox({ hex }) {
  return (
    <ColorBoxContainer>
      <Background color={hex} />
      <Content>color box</Content>
    </ColorBoxContainer>
  );
}

export default ColorBox;
