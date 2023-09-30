interface AuthBaseDto {
  password: string;
}

export interface AuthEmailDto extends AuthBaseDto{
  email: string;
}

export interface AuthUsernameDto extends AuthBaseDto{
  username: string;
}
