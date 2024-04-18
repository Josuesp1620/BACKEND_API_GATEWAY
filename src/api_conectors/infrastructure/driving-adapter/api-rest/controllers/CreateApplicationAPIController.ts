import { NextFunction, Request, Response } from "express"
import { PostgresDBApplicationAPIRepository } from "../../../implementacion/sequelize/postgres.implementation";
import { ApplicationAPI } from "../../../../domain/entities/ApplicationAPI";
import { ApplicationAPICreateUseCase } from "../../../../application/use_cases/CreateApplicationAPIUseCase";


export const createController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
        const { name, upstream_url, origin_urls } = req.body;

        const data : ApplicationAPI = {
            name,
            upstream_url,
            origin_urls
        }
        
        const postgresDBUserRepository = new PostgresDBApplicationAPIRepository()
        const useCase = new ApplicationAPICreateUseCase(postgresDBUserRepository)
        const dataCreated = await useCase.run(data)

        res.status(201).json({
            status: "created",
            code: 201,
            message: "Registro Creado Correctamente",
            data: dataCreated
        })

    } catch (error) {
        next(error)
    }
}
