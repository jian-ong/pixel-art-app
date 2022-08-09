import Image from "next/image";
import styled from "styled-components";
import { Color } from "../models/types";
import png from "./assets/color-picker.png";

const ColorCell = styled.button<{ color: string }>`
  border: 1px solid whitesmoke;
  background-color: ${(props) => props.color};
  height: 100px;
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColorPalette = ({
  colors,
  selectedColor,
  onSelect,
}: {
  colors: Color[];
  selectedColor: Color | null;
  onSelect: (color: Color) => void;
}) => {
  return (
    <Container>
      {colors.map((color: Color) => (
        <ColorCell key={color} color={color} onClick={() => onSelect(color)}>
          {color === selectedColor ? <Image src={png} alt="color" /> : null}
        </ColorCell>
      ))}
    </Container>
  );
};
