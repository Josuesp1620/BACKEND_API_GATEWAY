export interface GatewayEndPointEntity {
    id?: string
    app_id?: string
    route?: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    active?: boolean    
    createdAt?: Date
    updatedAt?: Date
}