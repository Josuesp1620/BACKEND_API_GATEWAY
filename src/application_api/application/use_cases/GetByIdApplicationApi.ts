import { ApplicationAPI as Entity } from '@applicationapi/domain/entities'
import { ApplicationAPI as Repository } from '../../domain/repositories'

export class GetByIdApplicationApi {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string): Promise<Entity | null > {
        const entity: Entity | null = await this._repository.getById(id)
        return entity
    }
}
