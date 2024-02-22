import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AgendaModule } from './agenda/agenda.module';
import { AgendaController } from './agenda/agenda.controller';

@Module({
  imports: [AgendaModule, ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_CONNECTIONSTRING, {
    dbName:process.env.MONGODB_DB_NAME
  }), AgendaModule],
  controllers: [AppController, AgendaController],
  providers: [AppService],
})
export class AppModule {}
