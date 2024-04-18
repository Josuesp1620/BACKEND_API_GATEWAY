import { Router } from "express"
import { CreateApplicationAPIController, EndPointController } from "../controllers"
import { ROUTES_APPLICATION_API, ENDPOINT_API } from "../../../../../core/infrastructure/driving-adapter/api-rest/routes/v1/const.routes"
import { CorsMiddleware } from "../middleware/CorsMiddleware"
 
const corsMiddleware = new CorsMiddleware()
const route = Router()

route.post(ROUTES_APPLICATION_API.APPLICATION_API_CREATE, CreateApplicationAPIController)
route.post('/test', corsMiddleware.dynamicCors, EndPointController)

export default route