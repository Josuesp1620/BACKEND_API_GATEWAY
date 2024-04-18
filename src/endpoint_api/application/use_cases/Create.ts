import { EndPointApi as Entity } from '@/endpoint_api/domain/entities'
import { EndPointApi as Repository } from '@/endpoint_api/domain/repositories';

export class CreateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(data: Entity): Promise<Entity> {
       
        const created : Entity = await this._repository.save(data)

        return created
    }
}
