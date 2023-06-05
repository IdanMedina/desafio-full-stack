import { randomUUID } from "crypto"
import { Exclude } from "class-transformer"

export class Client {
    readonly id: string
    name: string
    email: string
    phone: string
    readonly createdAt: Date

    @Exclude()
    password: string
    
    constructor(){
        this.id = randomUUID()
        this.createdAt = new Date()
    }
}
