import React from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm.js";
import { v4 } from "uuid";

export default function App() {
  return (
    <>
      <AddColorForm/>
      <ColorList/>
  </>
  );
}