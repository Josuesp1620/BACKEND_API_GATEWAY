import generator from 'generate-password-ts'

export class GeneratePasswordManager {

    constructor() {
    }

    public async generate(): Promise<string> {
        return generator.generate({
            length: 12,
            numbers: true
        })
    }
}