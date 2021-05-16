export class ClientDetail{
    constructor(private clientId:string){}

    public remove():string{
        return this.clientId;
    }
}