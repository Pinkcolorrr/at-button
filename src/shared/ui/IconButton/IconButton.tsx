import { FC } from "react";
import { IconButtonProps } from "@shared/ui/IconButton/IconButtonProps";
import classes from './IconButton.module.scss';

export const IconButton: FC<IconButtonProps> = (
  {
    Icon,
    onClick,
    disabled = false,
    role= 'button',
    type = 'button',
  }) => {

  return (
    <button className={classes.iconButton}
            disabled={disabled}
            role={role}
            type={type}
            onClick={onClick}>
      <Icon/>
    </button>
  );
}
