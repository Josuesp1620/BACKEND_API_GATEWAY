import { Router } from "express"
import { createController } from "../controllers"
import { ROUTES_APPLICATION_API } from "@/core/routes/v1/const.routes"
 
const route = Router()

route.post(ROUTES_APPLICATION_API.APPLICATION_API_CREATE, createController)

export default route