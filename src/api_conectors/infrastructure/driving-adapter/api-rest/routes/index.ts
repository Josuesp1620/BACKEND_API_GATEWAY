import { Request, Response, NextFunction, Router } from "express"
import { logger } from "../../../../../shared/utils/Logger"

import { ENDPOINT_API, ROUTES_APPLICATION_API } from "../../../../../core/infrastructure/driving-adapter/api-rest/routes/v1/const.routes"
import routes from './endpoints.routes'
const route = Router()

route.use(ROUTES_APPLICATION_API.APPLICATION_API, routes)
// route.use(ENDPOINT_API, routes)

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err + "\n")
    res.status(500).json({
        status: "error",
        code: 500,
        message: "Error del servidor",
        data: null
    })
})

export default route