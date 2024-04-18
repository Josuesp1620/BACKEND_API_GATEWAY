import { NextFunction, Request, Response } from 'express'

import { ApplicationApi as Entity } from '@/application_api/domain/entities';
import { CreateUseCase as UseCase } from '@/application_api/application/use_cases';
import { ImplementationSequelize } from '@/application_api/infrastructure/implementacion/sequelize';

export const createController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
        const { name, upstream_url, origin_urls } = req.body;

        const data : Entity = {
            name,
            upstream_url,
            origin_urls
        }
        
        const sequelizeRepository = new ImplementationSequelize()
        const useCase = new UseCase(sequelizeRepository)
        const dataCreated = await useCase.run(data)

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
