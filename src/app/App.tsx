import { Suspense } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "helper/className/classNames";
import { useTheme } from "./providers/themeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

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
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
