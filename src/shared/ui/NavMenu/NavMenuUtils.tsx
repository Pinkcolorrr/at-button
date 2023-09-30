import { Link } from "react-router-dom";
import { IconButton, NavMenuItem } from "@shared/ui";
import classes from "./NavMenu.module.scss";

export const getNavMenuLinkButton = (item: NavMenuItem, index: number) => (
  <Link to={item.routerLink} key={index}>
    <IconButton className={classes.iconNavButton} Icon={item.Icon}/>
  </Link>
);
