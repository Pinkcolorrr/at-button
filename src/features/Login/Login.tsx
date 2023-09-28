import { FC, useState } from "react";
import { useThunkDispatch } from "@app/store/hooks";
import { LoginProps } from "@features/Login";
import { LoginForm, LoginFormInputs } from "@entities/LoginForm";
import { authByEmailAndPassword } from "@entities/Viewer";


export const Login: FC<LoginProps> = (props) => {
  const {onLogin, ...otherProps} = props;
  const dispatch = useThunkDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (formData: LoginFormInputs) => {
    setLoading(true);
    const result = await dispatch(authByEmailAndPassword({password: formData.password, email: formData.usernameOrEmail}));
    setLoading(false);
    onLogin();
    console.log(result.payload);
  };

  return (<LoginForm loading={loading} onSubmit={onSubmit} htmlFormProps={otherProps}/>);
};
