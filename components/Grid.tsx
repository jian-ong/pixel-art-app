import styled from "styled-components";
import { Color } from "../models/types";

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Col = styled.div<{ color: Color }>`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

type Props = {
  grid: Color[][];
  onCellSelect: (rowIndex: number, colIndex: number) => void;
};

const Grid = ({ grid, onCellSelect }: Props) => {
  return (
    <div>
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((col, colIndex) => (
            <Col
              key={colIndex}
              color={col}
              onClick={() => onCellSelect(rowIndex, colIndex)}
            ></Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Grid;
