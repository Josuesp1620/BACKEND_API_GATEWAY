import { Router } from 'express'
import { createController } from '../controllers'
import { ROUTES_GATEWAY_ENDPOINT } from '@/core/routes/v1/const.routes'

const route = Router()

route.post(ROUTES_GATEWAY_ENDPOINT.GATEWAY_ENDPOINT_CREATE, createController)

export default route