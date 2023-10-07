import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { RolesController } from "./roles/roles.controller";
import { RolesModule } from "./roles/roles.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: "postgres",
          host: configService.get<string>("POSTGRES_HOST"),
          port: Number(configService.get<string>("POSTGRES_PORT")),
          username: configService.get<string>("POSTGRES_USERNAME"),
          password: configService.get<string>("POSTGRES_PASSWORD"),
          database: configService.get<string>("POSTGRES_DB"),
          synchronize: configService.get("POSTGRES_DB_SYNC"),
          autoLoadEntities: true
        };
      }
    }),
    UsersModule,
    RolesModule
  ],
  controllers: [RolesController],
  providers: []
})
export class AppModule {
  constructor(private dataSource: DataSource) {
  }
}
