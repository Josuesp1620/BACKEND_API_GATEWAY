import { Request, Response, NextFunction, Router } from 'express'
import { logger } from '@/shared/utils/Logger'

import { ROUTES_GATEWAY_ENDPOINT } from '@/core/routes/v1/const.routes'
import routes from './routes'
import { CreateEntityException } from '@/shared/exceptions'
const route = Router()

route.use(ROUTES_GATEWAY_ENDPOINT.GATEWAY_ENDPOINT, routes)

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err + '\n')
    if (err instanceof CreateEntityException) {
        res.status(422).json({
            status: "error",
            code: 422,
            message: err.message,
            data: null
        })
    }
    else {
        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Error del servidor',
            data: null
        })
    }
})

export default route