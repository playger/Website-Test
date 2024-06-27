import { classNames } from "shared/lib/className/classNames";
import cls from "./Navbat.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/Applink";
import { ThemeSwither } from "widgets/ThemeSwicher";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwither className={"msfnojesjjno"}/>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.INVENTED}
          to={"/"}
          className={cls.mainLink}
        >
          Главаня Страница
        </AppLink>
        <AppLink theme={AppLinkTheme.INVENTED} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
