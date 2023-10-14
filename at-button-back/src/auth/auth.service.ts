import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "./dto/login-dto";
import { CreateUserDto } from "../users/dto/create-user-dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcryptjs from "bcryptjs";
import { User } from "../users/user.entity";
import { AuthInfo } from "./models/auth-info";
import { ConfigService } from "@nestjs/config";
import { JwtPayload } from "./models/jwt-payload";

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
  }

  async login(dto: LoginDto): Promise<AuthInfo> {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async register(dto: CreateUserDto): Promise<AuthInfo> {
    const candidate = await this.usersService.getUserByEmail(dto.email);
    if (candidate) {
      throw new HttpException({ message: "User with this email already exists" }, HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcryptjs.hash(dto.password, this.configService.get("SALT"));
    const user = await this.usersService.create({ ...dto, password: hashPassword });
    return this.generateToken(user);
  }

  private async generateToken(user: User): Promise<AuthInfo> {
    const payload: JwtPayload = {email: user.email, id: user.id, roles: user.roles};
    return {
      accessToken: this.jwtService.sign(payload)
    };
  }

  private async validateUser(userDto: LoginDto) {
    const user = await this.usersService.getUserByEmail(userDto.email);
    const passwordEquals = await bcryptjs.compare(userDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({message: "Invalid email or password"} );
  }
}
