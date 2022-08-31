import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { copyHashToClipboard } from "../components/hash";
import { ColorPalette } from "../components/ColorPalette";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import { Color } from "../models/types";

const createEmptyGrid = (numRows: number, numCols: number): Color[][] =>
  new Array(numRows).fill(new Array(numCols).fill("#fff"));

const Home: NextPage = () => {
  const colors: Color[] = [
    "#fff",
    "#f6dbdb",
    "#f2e3c6",
    "#d3ece1",
    "#c2eec7",
    "#eed2e8",
    "#fcdabe",
    "#f2c7cc",
    "#C0C2E2",
    "#C2E7F1",
    "#D7F2CE",
    "#F3FBD2",
    "#CC99C9",
    "#9EC1CF",
    "#9EE09E",
    "#FDFD97",
    "#FEB144",
    "#FF6663",
    "#0151FF",
    "#45BD46",
    "#FFED16",
    "#FF8500",
    "#E40B27",
    "#000",
  ];

  const [grid, setGrid] = useState<Color[][]>(createEmptyGrid(25, 25));

  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  const resetGrid = () => setGrid(createEmptyGrid(25, 25));

  const handleCellSelect = (
    selectedRowIndex: number,
    selectedColIndex: number
  ) => {
    if (selectedColor) {
      const newGrid = grid.map((row, rowIndex) =>
        rowIndex === selectedRowIndex
          ? row.map((col, colIndex) =>
              colIndex === selectedColIndex ? selectedColor : col
            )
          : row
      );
      setGrid(newGrid);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
        colorPalette={
          <ColorPalette
            colors={colors}
            selectedColor={selectedColor}
            onSelect={(color) => setSelectedColor(color)}
          />
        }
        grid={<Grid onCellSelect={handleCellSelect} grid={grid} />}
        actions={
          <>
            <button onClick={() => copyHashToClipboard(grid)}>save</button>
            <button onClick={() => resetGrid()}>reset</button>
          </>
        }
      />
    </>
  );
};

export default Home;
