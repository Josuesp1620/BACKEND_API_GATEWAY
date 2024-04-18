import { NextFunction, Request, Response } from "express"
import { AESCipher } from "../../../driven-adapter/crypto";
import axios from 'axios'
import { PostgresDBApplicationAPIRepository } from "../../../../infrastructure/implementacion/sequelize/postgres.implementation";
import { ApplicationAPIGetByIdUseCase } from "../../../../application/use_cases/GetByIdpplicationAPIUseCase";
import { ApplicationAPI } from "../../../../domain/entities/ApplicationAPI";

interface ROUTE_REQUEST {
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
}

interface DATA_REQUEST {
    data: Object
}

export const endPointController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const APP_ID: string | undefined = req.query.APP_ID as string | undefined;
        if (APP_ID) {
            
            const { route, data } = req.body;
        
            const postgresDBUserRepository = new PostgresDBApplicationAPIRepository();
            const useCase = new ApplicationAPIGetByIdUseCase(postgresDBUserRepository);
    
            const applicationAPI: ApplicationAPI | null = await useCase.run(APP_ID);      

            // GET SECRET DECRYPTED DATA && GET URL UPSTREAM
            const API_SECRET_KEY : string = applicationAPI?.api_key!
            const URL_ENDPOINT_APP : string = applicationAPI?.upstream_url!

            const _encrypt = new AESCipher(API_SECRET_KEY)
            const route_decrypted : ROUTE_REQUEST = _encrypt.decrypt(route);
            const data_decrypted : DATA_REQUEST = _encrypt.decrypt(data);
                        
            const request_server = await axios({
                method: route_decrypted.method,
                baseURL: URL_ENDPOINT_APP,
                url: route_decrypted.path,
                data: data_decrypted.data
            })

            res.status(200).json({
                status: "success",
                code: 200,
                message: "Inicio de sesión exitoso",
                data: request_server.data.data
            })
        }      
    } catch (error:any) {        
        if(error.response && error.response.data){
            res.status(500).json(error.response.data)
        }else {
            res.status(500).json({
                status: "success",
                code: 500,
                message: "Server Error",
                data: null
            })
        }
    }
}
