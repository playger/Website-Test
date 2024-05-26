import { Suspense, useContext } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helper/className/classNames";

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
      <Link to={"/"}>Главаня Страница</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
