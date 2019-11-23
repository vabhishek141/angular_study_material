export class Emp
{
    private No: number;
    private Name: string; 
    private Address:string;

    constructor()
    {
        this.No = 10;
        this.Name = "Mahesh";
        this.Address = "Pune";
    }

    PrintDetails(): string
    {
        return this.No + this.Name + this.Address;
    }
}