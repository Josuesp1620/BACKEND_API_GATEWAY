import { GatewayEndPointEntity as Entity } from '../entities'

export interface GatewayEndPointRepository {
    getAll: () => Promise<Entity[]>
    save: (entity: Entity) => Promise<Entity | null>
    update: (entity: Entity) => Promise<Entity | null>
    delete: (id: string) => Promise<void>
    getById: (id: string) => Promise<Entity | null>
}
