import styled from "styled-components";
import { Color } from "../models/types";

const ColorCell = styled.div<{ color: string }>`
  ${(props) => `background-color: ${props.color}`};
  height: 20px;
  width: 20px;
`;

const Container = styled.div`
  display: flex;
`;

export const ColorPalette = ({ colors }: { colors: Color[] }) => {
  return (
    <Container>
      {colors.map((color: Color) => (
        <ColorCell key={color} color={color} />
      ))}
    </Container>
  );
};
