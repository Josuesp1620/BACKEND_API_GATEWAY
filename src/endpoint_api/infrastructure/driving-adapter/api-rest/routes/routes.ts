import { Router } from "express"
import { createController } from "../controllers"
import { ROUTES_ENDPOINT_API } from "@/core/routes/v1/const.routes"

const route = Router()

route.post(ROUTES_ENDPOINT_API.ENDPOINT_API_CREATE, createController)

export default route