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
};

const Grid = ({ grid }: Props) => {
  return (
    <div>
      {grid.map((row, i) => (
        <Row key={i}>
          {row.map((col, i) => (
            <Col key={i} color={col}></Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Grid;
