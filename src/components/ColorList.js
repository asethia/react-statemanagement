import React, { useContext } from "react"
import Color from "./Color"
import { useColors} from "../hooks/color-hooks";

export default function ColorList() {
    // get colors from color context
  const { colors, removeColor, rateColor } = useColors();
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    <div>
      {colors.map(color => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}