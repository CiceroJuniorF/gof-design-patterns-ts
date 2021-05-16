import { ClientAddresses } from "./client-addresses";
import { ClientBag } from "./client-bag";
import { ClientBills } from "./client-bills";
import { ClientDetail } from "./client-detail";

export class ClientRemoveFacade{

    private clientAddresses:ClientAddresses;
    private clientDetail:ClientDetail;
    private clientBills:ClientBills;
    private clientBag:ClientBag;    

    constructor(private clientId:string){
        this.clientAddresses = new ClientAddresses(clientId);
        this.clientDetail = new ClientDetail(clientId);
        this.clientBills = new ClientBills(clientId);
        this.clientBag = new ClientBag(clientId);
    }

    public remove():string{
        this.clientAddresses.removeAll();
        this.clientDetail.remove();
        this.clientBills.removeAll();
        this.clientBag.removeAllItems();
        return this.clientId;
    }
}