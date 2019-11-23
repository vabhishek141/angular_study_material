const i = 1000;
console.log("Before Function " + i );

function Print()
{
    for(let i=0; i< 10; i++) 
    {
        console.log(i)   ;
    }

    console.log("After Loop " + i);
}

//i = 100;

Print();

console.log("After Function " + i );

