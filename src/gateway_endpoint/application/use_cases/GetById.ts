import { GatewayEndPointEntity as Entity } from '@/gateway_endpoint/domain/entities'
import { GatewayEndPointRepository as Repository } from '@/gateway_endpoint/domain/repositories'

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
