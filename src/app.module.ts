import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:nAESVZIk8Q9q6HFg@cluster0.6coka.mongodb.net/test'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
