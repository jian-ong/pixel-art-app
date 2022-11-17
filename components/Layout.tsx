import Image from "next/image";
import { ReactElement } from "react";
import styled from "styled-components";
import png from "./assets/pixel.png";

const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffe0;
`;

const TitleContainer = styled.div`
  font-size: 2rem;
  padding: 30px 30px 0px;
  text-align: center;
`;

const TvContainer = styled.div`
  padding: 100px 100px 30px;
  background-color: #f6f0f9;
  margin: 0 auto;
  border-radius: 150px;
  border: solid 15px #f3bad6;
`;

const GridContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  border: solid 2px;
  border-radius: 20px;
  overflow: hidden;
`;

const ColorActionsContainer = styled.div`
  display: flex;
`;

const ColorPaletteContainer = styled.div`
  padding: 10px;
  flex: 1;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px 0 0;
  &>button: hover {
    border: 3px solid #d9d9d9;
  }

  &>button: active {
    box-shadow: 1px 5px #cccccc;
    transform: translateY(2px);
  }

  & > button {
    height: 150px;
    width: 150px;
    border: 2px solid white;
    border-radius: 1000px;
    font-family: monospace;
    font-size: 2rem;
    box-shadow: 1px 3px #fff;
  }
`;

type Props = {
  colorPalette: ReactElement;
  grid: ReactElement;
  actions: ReactElement;
};

const Layout = ({ colorPalette, grid, actions }: Props) => {
  return (
    <LayoutContainer>
      <TitleContainer>
        <Image src={png} alt="title logo" />
      </TitleContainer>
      <TvContainer>
        <GridContainer>{grid}</GridContainer>
        <ActionsContainer>{actions}</ActionsContainer>
      </TvContainer>
      <ColorActionsContainer>
        <ColorPaletteContainer>{colorPalette}</ColorPaletteContainer>
      </ColorActionsContainer>
    </LayoutContainer>
  );
};

export default Layout;
