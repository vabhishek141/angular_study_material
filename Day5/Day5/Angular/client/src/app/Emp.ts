export class Emp
{
    ENo: number;
    EName: string;
    EAddress : string;

    constructor()
    {
        this.ENo = 100;
        this.EName = "ABC";
        this.EAddress = "Pune";
        console.log(this.EAddress);
    }
}