import LZUTF8 from "lzutf8";
import { Color } from "../models/types";

export const encodeGridToHash = (grid: Color[][]): string => {
  const gridString = grid.join("|");
  const output = LZUTF8.compress(gridString);
  return Buffer.from(output).toString("base64");
};

export const decodeHashToGrid = (hash: string): Color[][] => {
  const compressedGrid = Buffer.from(hash, "base64");
  const grid = LZUTF8.decompress(compressedGrid);
  return grid.split("|").map((rowString: string) => rowString.split(","));
};

export const copyHashToClipboard = (grid: Color[][]) => {
  const encodedHash = encodeURIComponent(encodeGridToHash(grid));
  const urlForCopy = new URL(window.location.href).origin;

  navigator.clipboard.writeText(`${urlForCopy}?hash=${encodedHash}`);
};
