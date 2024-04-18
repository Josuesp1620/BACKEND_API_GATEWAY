import { ApplicationAPI } from "../../domain/entities/ApplicationAPI"
import { ApplicationAPIRepository } from "../../domain/repositories/ApplicationAPIRepository"

export class ApplicationAPICreateUseCase {

    private readonly _applicationAPIRepository: ApplicationAPIRepository

    constructor(
        applicationAPIRepository: ApplicationAPIRepository
    ) {
        this._applicationAPIRepository = applicationAPIRepository
    }

    async run(data: ApplicationAPI): Promise<any> {
       
        const applicationAPICreated: ApplicationAPI = await this._applicationAPIRepository.save(data)

        return applicationAPICreated
    }
}
