import { Router } from 'express'
import { ROUTE_VERSION } from './const.routes'
import { LoggerMiddleware } from '@/shared/middleware/LoggerMiddleware'
import GatewayApplicationRoutes from '@/gateway_application/infrastructure/driving-adapter/api-rest/routes'
import GatewayEndPoint from '@/gateway_endpoint/infrastructure/driving-adapter/api-rest/routes'

const loggerMiddleware = new LoggerMiddleware()
const route = Router() 
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, GatewayApplicationRoutes)
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, GatewayEndPoint)
export default route
