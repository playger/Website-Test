import { Link } from "react-router-dom";
import { classNames } from "shared/lib/className/classNames";
import cls from "./Navbat.module.scss";
interface NavbarProps {
  className?: string;
}

export const Navbar = () => (
  <div className={classNames("Navbar")}>
    <Link to={"/"}>Главаня Страница</Link>
    <Link to={"/about"}>О сайте</Link>
  </div>
);
