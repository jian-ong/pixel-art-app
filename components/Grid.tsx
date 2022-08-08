import styled from "styled-components";
import { Color } from "../models/types";

const Row = styled.div`
  display: flex;
`;

const Col = styled.div<{ color: Color }>`
  width: 25px;
  height: 25px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

type Props = {
  grid: Color[][];
};

const Grid = ({ grid }: Props) => {
  return (
    <>
      {grid.map((row, i) => (
        <Row key={i}>
          {row.map((col, i) => (
            <Col key={i} color={col}></Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default Grid;
