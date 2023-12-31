import { Injectable } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { EntityManager, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user-dto";
import { RolesService } from "../roles/roles.service";
import { UserMapper } from "./user-mapper";


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectEntityManager() private readonly entityManager: EntityManager,
    private readonly rolesService: RolesService
  ) {
  }

  getAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ["roles"] });
  }

  get(id: string): Promise<User | null> {
    return this.usersRepository.findOne({relations: ["roles"], where: {id}});
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(UserMapper.fromDto(dto));
    user.roles.push(await this.rolesService.getByValue(dto.role ?? "User"));
    return this.usersRepository.save(user);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async getUserByEmail(email: string) {
    return this.usersRepository.findOne({relations: ["roles"], where: {email}});
  }
}
