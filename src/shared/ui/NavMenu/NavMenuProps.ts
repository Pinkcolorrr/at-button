import { FC } from "react";

export interface NavMenuProps {
  menuItems: NavMenuItem[];
}

export interface NavMenuItem {
  Icon: FC;
  routerLink: string;
}
