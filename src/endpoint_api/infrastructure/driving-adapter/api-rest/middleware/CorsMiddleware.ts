import { Response, NextFunction } from 'express'
import { TokenManager } from "../../../../../shared/utils/TokenManager"
import { PostgresDBApplicationAPIRepository } from '../../../implementacion/sequelize/postgres.implementation';
import { ApplicationAPIGetByIdUseCase } from '../../../../application/use_cases/GetByIdpplicationAPIUseCase';
import { ApplicationAPI } from '../../../../domain/entities/ApplicationAPI';
import cors, { CorsOptions } from 'cors'
export class CorsMiddleware {

  async dynamicCors(req: any, res: Response, next: NextFunction) {

    const postgresDBUserRepository = new PostgresDBApplicationAPIRepository();
    const useCase = new ApplicationAPIGetByIdUseCase(postgresDBUserRepository);

    try {
      const APP_ID: string | undefined = req.query.APP_ID as string | undefined;
      if (APP_ID) {
        const applicationAPI: ApplicationAPI | null = await useCase.run(APP_ID);      
        
        if (applicationAPI?.origin_urls?.includes(req.headers.origin)) {          
          const corsOptions : CorsOptions = {
            origin: req.headers.origin,            
            methods: ['POST'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            exposedHeaders: ['Content-Length'],
            credentials: false,
            maxAge: 86400,
          };
          res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
          cors(corsOptions)(req, res, next);
          next()
        } else {
          return res.status(500).json({ message: 'Authentication Error' })
        }
      }
    } catch (error) {
      return res.status(500).json({ message: 'Authentication Error' })
    }
  }
}