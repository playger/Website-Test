import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "./providers/themeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;
  return (
    <div
      className={classNames("app", { hovered: true, Selected: true }, [
        theme,
        "cls2",
        "cls3",
      ])}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
