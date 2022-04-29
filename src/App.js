/** @jsxImportSource theme-ui */
import "./styles.css";

import { useColorMode } from "theme-ui";

export default (props) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header sx={{ textAlign: "center" }}>
      <button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button>
      <div sx={{ fontSize: "42px" }}>text</div>
    </header>
  );
};
