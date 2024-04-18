import { Request, Response, NextFunction, Router } from "express"
import { logger } from "@/shared/utils/Logger"

import { ROUTES_ENDPOINT_API } from "@/core/routes/v1/const.routes"
import routes from './routes'
const route = Router()

route.use(ROUTES_ENDPOINT_API.ENDPOINT_API, routes)

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