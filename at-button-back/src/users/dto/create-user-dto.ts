import { ApiProperty } from "@nestjs/swagger";
import { Roles } from "../../roles/roles";

export class CreateUserDto {
  @ApiProperty({ example: "user-email@gmail.com", description: "email" })
  readonly email: string;
  @ApiProperty({ example: "user-name", description: "username" })
  readonly username: string;
  @ApiProperty({ example: "OrHoUVeWFmMqOwd", description: "password" })
  readonly password: string;
  @ApiProperty({ example: "User", description: "role of the user", required: false })
  readonly role?: Roles;
}
