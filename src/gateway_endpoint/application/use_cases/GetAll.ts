import { GatewayEndPointEntity as Entity } from '@/gateway_endpoint/domain/entities'
import { GatewayEndPointRepository as Repository } from '@/gateway_endpoint/domain/repositories'

export class GetAllUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(): Promise<Entity[] | null > {
        const entities: Entity[] | null = await this._repository.getAll()
        return entities
    }
}
