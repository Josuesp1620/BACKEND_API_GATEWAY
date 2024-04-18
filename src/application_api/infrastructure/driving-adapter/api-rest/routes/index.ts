import { Response, Router } from "express"
import { logger } from "@/shared/utils/Logger"

import { ROUTES_APPLICATION_API } from "@/core/routes/v1/const.routes"
import routes from './endpoints.routes'
const route = Router()

route.use(ROUTES_APPLICATION_API.APPLICATION_API, routes)

route.use((err: Error, _req: any, res: Response, _next: any) => {
    logger.error(err + "\n")
    res.status(500).json({
        status: "error",
        code: 500,
        message: "Error del servidor",
        data: null
    })
})

export default route