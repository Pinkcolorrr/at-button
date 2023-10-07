import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user-dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.entity";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @ApiOperation({ summary: "create user" })
  @ApiResponse({ status: 200, type: User })
  @ApiBody({ type: CreateUserDto })
  @Post("/create")
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @ApiOperation({ summary: "delete user" })
  @ApiResponse({ status: 200, type: null })
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.usersService.delete(id);
  }

  @ApiOperation({ summary: "get all users" })
  @ApiResponse({ status: 200, type: [User] })
  @Get("/getAll")
  getAll() {
    return this.usersService.getAll();
  }

  @ApiOperation({ summary: "get user by id" })
  @ApiResponse({ status: 200, type: User })
  @Get(":id")
  get(@Param("id") id: string) {
    return this.usersService.get(id);
  }
}
