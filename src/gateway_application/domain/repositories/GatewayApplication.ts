import { GatewayApplicationEntity as Entity } from '../entities'

export interface GatewayApplicationRepository {
    getAll: () => Promise<Entity[]>
    save: (entity: Entity) => Promise<Entity | null>
    update: (entity: Entity) => Promise<Entity | null>
    delete: (id: string) => Promise<void | null>
    getById: (id: string) => Promise<Entity | null>
}
