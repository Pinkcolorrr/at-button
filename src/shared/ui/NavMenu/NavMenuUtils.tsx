import { Link } from "react-router-dom";
import { IconButton, NavMenuItem } from "@shared/ui";
import classes from "./NavMenu.module.scss";

export const getNavMenuLinkButton = (item: NavMenuItem, index: number) => (
  <span className={classes.iconNavButton} key={index}>
    <Link to={item.routerLink}>
      <IconButton Icon={item.Icon} size={40}/>
    </Link>
  </span>
);
