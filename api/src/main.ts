import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import Helmet from 'helmet'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(Helmet())

  const corsURLS = process.env.CORS_ORIGIN.split(',')
  app.enableCors({ origin: corsURLS })

  app.use(cookieParser(process.env.COOKIE_SECRET))

  await app.listen(3000)
}
bootstrap()
