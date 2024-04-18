import { EndPointApi as Entity } from '@/endpoint_api/domain/entities/EndPointApi'
import { EndPointApi as Repository } from '@/endpoint_api/domain/repositories'

export class GetByIdUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string): Promise<Entity | null > {
        const entity : Entity | null = await this._repository.getById(id)
        return entity
    }
}
