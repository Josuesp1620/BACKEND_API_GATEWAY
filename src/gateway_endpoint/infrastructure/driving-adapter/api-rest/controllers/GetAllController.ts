import { NextFunction, Request, Response } from 'express'

import { GatewayEndPointEntity as Entity } from '@/gateway_endpoint/domain/entities';
import { GetAllUseCase as UseCase } from '@/gateway_endpoint/application/use_cases';
import { ImplementationSequelize } from '@/gateway_endpoint/infrastructure/implementacion/sequelize';

export const getAllController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
        const sequelizeRepository = new ImplementationSequelize()
        const useCase = new UseCase(sequelizeRepository)
        const entities : Entity[] | null = await useCase.run()

        res.status(201).json({
            status: 'created',
            code: 201,
            message: 'Registro Creado Correctamente',
            data: entities

        })

    } catch (error) {
        next(error)
    }
}
