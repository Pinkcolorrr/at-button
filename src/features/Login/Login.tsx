import { FC } from "react";
import { useTypedDispatch, useTypedSelector } from "@app/store/hooks";
import { LoginProps } from "@features/Login";
import { LoginForm, LoginFormInputs } from "@entities/LoginForm";
import { authByEmailAndPassword, viewerActions, ViewerSelectors } from "@entities/Viewer";


export const Login: FC<LoginProps> = (props) => {
  const {onLogin, ...otherProps} = props;
  const dispatch = useTypedDispatch();
  const loading = useTypedSelector(ViewerSelectors.loading);

  const onSubmitForm = async (formData: LoginFormInputs) => {
    dispatch(viewerActions.setLoading(true));
    await dispatch(authByEmailAndPassword({password: formData.password, email: formData.usernameOrEmail}));
    dispatch(viewerActions.setLoading(false));
    onLogin();
  };

  return (<LoginForm loading={loading} onSubmit={onSubmitForm} htmlFormProps={otherProps}/>);
};
