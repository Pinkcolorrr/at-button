import { ReactComponent as Person } from "@assets/icons/person.svg";
import { ReactComponent as Statistic } from "@assets/icons/statistics.svg";
import { NavMenuItem } from "@shared/ui";

export const AT_NAV_MENU_ITEM: NavMenuItem[] = [
  {Icon: Person, routerLink: "person"},
  {Icon: Statistic, routerLink: "statistic"}
];
