import { ReactComponent as person } from "@assets/icons/person.svg";
import { ReactComponent as statistic } from "@assets/icons/statistics.svg";
import { NavMenuItem } from "@shared/ui";

export const AT_NAV_MENU_ITEM: NavMenuItem[] = [
  {Icon: person, routerLink: 'person'},
  {Icon: statistic, routerLink: 'statistic'},
];
