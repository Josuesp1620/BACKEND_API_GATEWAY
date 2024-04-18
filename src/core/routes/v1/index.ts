import { Router } from "express"
import { ROUTE_VERSION } from "./const.routes"
import { LoggerMiddleware } from "@/shared/middleware/LoggerMiddleware"
import applicationApiRoutes from "@/application_api/infrastructure/driving-adapter/api-rest/routes"

const loggerMiddleware = new LoggerMiddleware()
const route = Router() 
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, applicationApiRoutes)
export default route
