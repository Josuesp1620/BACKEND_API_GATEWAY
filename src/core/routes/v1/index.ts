import { Router } from 'express'
import { ROUTE_VERSION } from './const.routes'
import { LoggerMiddleware } from '@/shared/middleware/LoggerMiddleware'
import GatewayApplicationRoutes from '@/gateway_application/infrastructure/driving-adapter/api-rest/routes'
import GatewayEndPointRoutes from '@/gateway_endpoint/infrastructure/driving-adapter/api-rest/routes'
import GatewayEntryRoutes from '@/gateway_entry/implementation/driving-adapter/api-rest/routes'

const loggerMiddleware = new LoggerMiddleware()
const route = Router() 
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, GatewayApplicationRoutes)
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, GatewayEndPointRoutes)
route.use(ROUTE_VERSION, loggerMiddleware.logRequestInfo, GatewayEntryRoutes)
export default route
