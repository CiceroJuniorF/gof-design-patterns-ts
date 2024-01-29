export class ClientBills{
    constructor(private clientId:string){}

    public removeAll():string{
        return this.clientId;
    }
}