import { classNames } from "shared/lib/className/classNames";
import cls from "./Navbat.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
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
