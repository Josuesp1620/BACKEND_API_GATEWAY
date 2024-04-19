import { GetByIdUseCase } from '@/gateway_application/application/use_cases';
import { GatewayApplicationEntity as Entity } from '@/gateway_application/domain/entities';
import { ImplementationSequelize } from '@/gateway_application/infrastructure/implementacion/sequelize';
import cors, { CorsOptions } from 'cors'
import { NextFunction, Response } from 'express';

export class CorsMiddleware {

  async dynamicCors(req: any, res: Response, next: NextFunction) {

    const gatewayApplication = new ImplementationSequelize();
    const useCase = new GetByIdUseCase(gatewayApplication);

    try {
      const APP_ID: string | undefined = req.query.APP_ID as string | undefined;
      if (APP_ID) {
        const applicationAPI: Entity | null = await useCase.run(APP_ID);      
        
        if (applicationAPI?.origin_urls?.includes(req.headers.origin)) {          
          // const corsOptions : CorsOptions = {
          //   origin: req.headers.origin,            
          //   methods: ['POST'],
          //   allowedHeaders: ['Content-Type', 'Authorization'],
          //   exposedHeaders: ['Content-Length'],
          //   credentials: false,
          //   maxAge: 86400,
          // };
          // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
          // cors(corsOptions)(req, res, next);
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