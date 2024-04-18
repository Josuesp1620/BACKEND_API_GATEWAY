import { ApplicationApi as Entity } from '../entities'

export interface ApplicationApi {
    getAll: () => Promise<Entity[]>
    save: (user: Entity) => Promise<Entity>
    update: (user: Entity) => Promise<Entity>
    delete: (id: string) => Promise<void>
    getById: (id: string) => Promise<Entity | null>
}
