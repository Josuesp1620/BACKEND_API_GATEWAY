import { Request, Response, NextFunction, Router } from 'express'
import { logger } from '@/shared/utils/Logger'
import routes from './routes'
import { ROUTES_GATEWAY_ENTRY } from '@/core/routes/v1/const.routes'
const route = Router()

route.use(ROUTES_GATEWAY_ENTRY.GATEWAY_ENTRY, routes)

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err + '\n')
    res.status(500).json({
        status: 'error',
        code: 500,
        message: 'Error del servidor',
        data: null
    })
})

export default route