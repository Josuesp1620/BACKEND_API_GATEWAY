import { ApplicationAPI } from "../../domain/entities/ApplicationAPI"
import { ApplicationAPIRepository } from "../../domain/repositories/ApplicationAPIRepository"

export class ApplicationAPIGetByIdUseCase {

    private readonly _applicationAPIRepository: ApplicationAPIRepository

    constructor(
        applicationAPIRepository: ApplicationAPIRepository
    ) {
        this._applicationAPIRepository = applicationAPIRepository
    }

    async run(id: string): Promise<ApplicationAPI | null > {
        const applicationAPI: ApplicationAPI | null = await this._applicationAPIRepository.getById(id)
        return applicationAPI
    }
}
