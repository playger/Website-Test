import { classNames } from "shared/lib/className/classNames";
import cls from "./LangSwither.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitherProps {
  className?: string;
}

export const LangSwither = ({ className }: LangSwitherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
  };
  return (
      <Button
        className={classNames(cls.LangSwither, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
        
      >
        {t("Lang")}
      </Button>
  );
};
