import { classNames } from "shared/lib/className/classNames";
import cls from "./Navbat.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
interface NavbarProps {
  className?: string;
}

const { t } = useTranslation();
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.INVENTED}
                    to={"/"}
                    className={cls.mainLink}
                >
                    {t("Main page")}
                </AppLink>
                <AppLink theme={AppLinkTheme.INVENTED} to={"/about"}>
                    {t("About page")}
                </AppLink>
            </div>
        </div>
    );
};
