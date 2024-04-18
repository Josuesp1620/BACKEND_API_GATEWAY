import jwt from 'jsonwebtoken'
import ms from 'ms'
import { User } from 'src/user/domain/entities'

export class TokenManager {
    private readonly secretKey: string

    constructor() {
        this.secretKey = process.env.JWT_SECRET_KEY || 'jwt_secret_key'
    }

    public generateToken(payload: User): string {
        const { email, role } = payload;
        return jwt.sign(
            { email, role, type: "access"},
            this.secretKey,
            { expiresIn: ms(3600000) }
        );
    }

    public generateRefreshToken(payload: User): string {
        const { email, role } = payload;
        return jwt.sign(
            { email, role, type: "refresh"},
            this.secretKey,
            { expiresIn: ms(3600000 * 24) }
        );
    }
    
    public verifyToken(token: string): { expired: boolean, decoded: any | null } {
        try {
            const decoded = jwt.verify(token, this.secretKey, { complete: true }) as { [key: string]: any }
            const { email, role, type } = decoded.payload
            return { expired: false, decoded: { email, role, type } }
        } catch (error) {
            return { expired: true, decoded: null }
        }
    }

    public decodeToken(token: string): any | null {
        try {
            const decoded = jwt.decode(token) as any
            return decoded
        } catch (error) {
            return null
        }
    }
}
