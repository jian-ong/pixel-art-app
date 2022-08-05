import { ReactElement } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  background-color: red;
  height: 100%;
`;

const ColorPaletteContainer = styled.div`
  background-color: blue;
  height: 200px;
`;

const GridContainer = styled.div`
  background-color: yellow;
  height: 200px;
`;

const ActionsContainer = styled.div`
  background-color: green;
  height: 200px;
`;

type Props = {
  colorPalette: ReactElement;
  grid: ReactElement;
  actions: ReactElement;
};

const Layout = ({ colorPalette, grid, actions }: Props) => {
  return (
    <LayoutContainer>
      <ColorPaletteContainer>{colorPalette}</ColorPaletteContainer>
      <GridContainer>{grid}</GridContainer>
      <ActionsContainer>{actions}</ActionsContainer>
    </LayoutContainer>
  );
};

export default Layout;
