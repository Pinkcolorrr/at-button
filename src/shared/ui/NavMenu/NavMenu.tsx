import { FC } from "react";
import { NavMenuProps } from "@shared/ui";
import { getNavMenuLinkButton } from "@shared/ui/NavMenu/NavMenuUtils";
import classes from './NavMenu.module.scss';


export const NavMenu: FC<NavMenuProps> = ({menuItems = []}) => {
  return (
    <nav className={classes.navMenu}>
      {menuItems.map((item, index) => getNavMenuLinkButton(item, index))}
    </nav>
  );
}
