import { randomUUID } from "crypto"

export class Contact {
    readonly id: string
    name: string
    email: string
    phone: string
    clientId?: string
    readonly createdAt: Date
    
    constructor(){
        this.id = randomUUID()
        this.createdAt = new Date()
    }
}
