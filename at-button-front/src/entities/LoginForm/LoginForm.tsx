import { FC } from "react";
import { useForm } from "react-hook-form";
import { LoginFormInputs, LoginFormProps } from "@entities/LoginForm/LoginFormProps";
import { LoginFormPasswordValidator, LoginFormUsernameValidator } from "@entities/LoginForm/LoginFormValidators";
import { Button } from "@shared/ui";
import { Input } from "@shared/ui";
import classes from "./LoginForm.module.scss";

export const LoginForm: FC<LoginFormProps> = (props, context) => {
	const {register, handleSubmit, formState: {errors}} = useForm<LoginFormInputs, typeof context, LoginFormInputs>();

	const registerUsername = register("usernameOrEmail", LoginFormUsernameValidator);
	const registerPassword = register("password", LoginFormPasswordValidator);


	return (
		<form onSubmit={handleSubmit(props.onSubmit)} {...props.htmlFormProps}>

			<Input
				className={classes.LoginFormUserNameInput}
				type="text"
				label="username"
				placeholder="john-smith@gmail.com"
				disabled={props.loading}
				invalid={!!errors.usernameOrEmail}
				validationMessage={errors.usernameOrEmail?.message}
				{...registerUsername}
			/>

			<Input
				className={classes.LoginFormPasswordNameInput}
				type="password"
				label="password"
				placeholder="****"
				disabled={props.loading}
				invalid={!!errors.password}
				validationMessage={errors.password?.message}
				{...registerPassword}
			/>

			<Button loading={props.loading} disabled={props.loading} type="submit">LOG IN</Button>
		</form>
	);
};
