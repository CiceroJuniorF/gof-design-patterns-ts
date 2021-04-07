export class DbConfig{
    private static readonly instance:DbConfig = new DbConfig();

    name:string;
    host:string;
    port:number;
    user:string;
    password:string;

    constructor(){
        this.name = 'dbTeste';
        this.host = 'localhost'
        this.port = 433
        this.user = 'user'
        this.password = Math.random().toString(36).substring(2); ;
    }


    public static getDbConfig():DbConfig{
        return DbConfig.instance;
    }


}