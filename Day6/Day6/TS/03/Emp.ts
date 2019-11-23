export class Emp
{
    private name:string = "sachin";
    private address:string = "mumbai";
    constructor (private no: number,
                name?: string,
                address?: string)
    {
         if(name!= undefined)
         {
            this.name = name;
         }
         if(address!=undefined)
         {
             this.address = address;
         }
    }

    GetDetails()
    {
        return this.no + this.name + this.address;
    }
}




