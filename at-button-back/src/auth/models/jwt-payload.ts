import { User } from "../../users/user.entity";

export class JwtPayload {
  email: User["email"];
  id: User["id"];
  roles: User["roles"];
}
