import { classNames } from "shared/lib/className/classNames";
import cls from "./Sidebar.module.scss";
import { useCallback, useState } from "react";
import { ThemeSwither } from "widgets/ThemeSwicher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwither/>
      </div>
    </div>
  );
};
