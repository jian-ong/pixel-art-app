import { ReactElement } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  font-size: 2rem;
  padding: 30px;
  text-align: center;
`;

const GridContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ColorActionsContainer = styled.div`
  display: flex;
`;

const ColorPaletteContainer = styled.div`
  flex: 1;
`;

const ActionsContainer = styled.div`
  height: 100px;
  padding: 40px;
`;

type Props = {
  colorPalette: ReactElement;
  grid: ReactElement;
  actions: ReactElement;
};

const Layout = ({ colorPalette, grid, actions }: Props) => {
  return (
    <LayoutContainer>
      <TitleContainer>Pixel Art App</TitleContainer>
      <GridContainer>{grid}</GridContainer>
      <ColorActionsContainer>
        <ColorPaletteContainer>{colorPalette}</ColorPaletteContainer>
        <ActionsContainer>{actions}</ActionsContainer>
      </ColorActionsContainer>
    </LayoutContainer>
  );
};

export default Layout;
