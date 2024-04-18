import { ApplicationAPI as Entity } from '../entities'

export interface ApplicationAPI {
    getAll: () => Promise<Entity[]>
    save: (user: Entity) => Promise<Entity>
    update: (user: Entity) => Promise<Entity>
    delete: (id: string) => Promise<void>
    getById: (id: string) => Promise<Entity | null>
}
