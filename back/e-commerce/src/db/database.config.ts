import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { envConfig } from '../config/db.config';

@Injectable()
export class DatabaseConfig implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get<string>(
        `mongodb+srv://${envConfig.dbAdmin}:${envConfig.dbPassword}@${envConfig.dbHost}/${envConfig.dbName}?retryWrites=true&w=majority`,
      ),
    };
  }
}
