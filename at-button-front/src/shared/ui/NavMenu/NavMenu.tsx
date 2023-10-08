import { FC, memo } from "react";
import { NavMenuProps } from "@shared/ui";
import { getNavMenuLinkButton } from "@shared/ui/NavMenu/NavMenuUtils";
import classes from "./NavMenu.module.scss";


export const NavMenuComponent: FC<NavMenuProps> = ({menuItems = []}) => {
  return (
    <nav className={classes.navMenu}>
      {menuItems.map((item, index) => getNavMenuLinkButton(item, index))}
    </nav>
  );
};

export const NavMenu = memo(NavMenuComponent);
