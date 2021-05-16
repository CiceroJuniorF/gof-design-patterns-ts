export class ClientBag{
    constructor(private clientId:string){}

    public removeAllItems():string{
        return this.clientId;
    }
}