export class Person
{
    constructor (private no: number,
                private name: string="sachin",
                private address: string="mumbai")
    {
    }

    GetDetails()
    {
        return this.no + this.name + this.address;
    }
}




