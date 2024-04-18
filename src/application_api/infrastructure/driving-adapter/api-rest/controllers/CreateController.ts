import { NextFunction, Request, Response } from 'express'

import { ApplicationAPI as Entity } from '@applicationapi/domain/entities';
import { CreateApplicationApi as UseCase } from '@applicationapi/application/use_cases';
import { ImplementationSequelize } from '@applicationapi/infrastructure/implementacion/sequelize';

export const createController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
        const { name, upstream_url, origin_urls } = req.body;

        const data : Entity = {
            name,
            upstream_url,
            origin_urls
        }
        
        const postgresDBUserRepository = new ImplementationSequelize()
        const useCase = new UseCase(postgresDBUserRepository)
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
