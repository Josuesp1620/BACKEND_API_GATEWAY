import { NextFunction, Request, Response } from 'express'

import { DeleteUseCase as UseCase } from '@/gateway_application/application/use_cases';
import { ImplementationSequelize } from '@/gateway_application/infrastructure/implementacion/sequelize';

export const deleteController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
        const { id } = req.query;

        const sequelizeRepository = new ImplementationSequelize()
        const useCase = new UseCase(sequelizeRepository)
        if (typeof id === 'string') {
            await useCase.run(id)
        }

        res.status(200).json({
            status: 'deleted',
            code: 200,
            message: 'Registro Eliminado Correctamente',
            data: null
        })

    } catch (error) {
        next(error)
    }
}
