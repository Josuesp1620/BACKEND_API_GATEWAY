import { EndPointAPI as Entity } from "../../domain/entities/EndPointAPI"
import { EndPointApi as Repository } from "../../domain/repositories";

export class CreateEndPointApi {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(data: Entity): Promise<any> {
       
        const created : Entity = await this._repository.save(data)

        return created
    }
}
