import styled from "styled-components";
import { Color } from "../models/types";

const ColorCell = styled.button<{ color: string; selected: boolean }>`
  border: 1px solid ${({ selected }) => (selected ? "red" : "black")};
  ${(props) => `background-color: ${props.color}`};
  height: 100px;
  width: 100px;
  border: 1px solid whitesmoke;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ColorPalette = ({
  colors,
  selected,
  onSelect,
}: {
  colors: Color[];
  selected: Color | null;
  onSelect: (color: Color) => void;
}) => {
  return (
    <Container>
      {colors.map((color: Color) => (
        <ColorCell
          key={color}
          color={color}
          selected={color === selected}
          onClick={() => onSelect(color)}
        />
      ))}
    </Container>
  );
};
