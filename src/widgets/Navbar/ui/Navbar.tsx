import { Link } from "react-router-dom";
import { classNames } from "shared/lib/className/classNames";
import cls from "./Navbat.module.scss";
import { log } from "console";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={"/"}>Главаня Страница</Link>
      <Link to={"/about"}>О сайте</Link>
    </div>
  );
};


