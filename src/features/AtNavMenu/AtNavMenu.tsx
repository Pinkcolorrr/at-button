import { FC } from "react";
import { AT_NAV_MENU_ITEM } from "@features/AtNavMenu/AtNavMenuModels";
import { NavMenu } from "@shared/ui";

export const AtNavMenu: FC = () => {
  return (
    <NavMenu menuItems={AT_NAV_MENU_ITEM}/>
  );
};
