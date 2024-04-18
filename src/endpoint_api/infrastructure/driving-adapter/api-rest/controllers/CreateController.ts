import { NextFunction, Request, Response } from 'express'

import { EndPointApi as Entity } from '@/endpoint_api/domain/entities';
import { CreateUseCase as UseCase } from '@/endpoint_api/application/use_cases';
import { ImplementationSequelize } from '@/endpoint_api/infrastructure/implementacion/sequelize';

export const createController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
        const { app_id, route, method, active } = req.body;

        const data : Entity = {
            app_id, 
            route, 
            method, 
            active,
        }
        
        const sequelizeRepository = new ImplementationSequelize()
        const useCase = new UseCase(sequelizeRepository)
        const dataCreated : Entity = await useCase.run(data)

        res.status(201).json({
            status: 'created',
            code: 201,
            message: 'Registro Creado Correctamente',
            data: dataCreated
        })

    } catch (error) {
        next(error)
    }
}
