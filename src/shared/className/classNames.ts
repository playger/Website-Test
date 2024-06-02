type Mods = Record<string, boolean | string>;

let mods ={"fhflkj": true,"cfgft": true ,"drtyjhr": false} 
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}

classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
  "withPaddings",
]);
("remove-btn hovered selectable red withPaddings");
