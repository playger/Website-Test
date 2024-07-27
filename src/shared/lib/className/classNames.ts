type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([classNames, value]) => Boolean(value))
            .map(([className,value ]) => className),
    ].join(" ");
}

classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
    "withPaddings",
]);
("remove-btn hovered selectable red withPaddings");
