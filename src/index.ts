let age: number = 20_456_456;
let course: string = 'TS';
let is_published: boolean = false;

let level;
level = 1;
level = 'a';

let numbers: number[] = [];

numbers[0] = 1;
numbers[1] = 2;

numbers.forEach(n =>n.toString)

let user: [number, string] = [1, 'Mosh'];
user.push(1); 

const enum Size{Small = 1, Medium, Large};

let mySize: Size = Size.Medium;
console.log(mySize);

voidRender(5);

function voidRender(document: number):void{
    let tmp: number = document *10;
}

function render(document:any):number{
    console.log(document);
    
    return 0;
}

let myObject : {
    id:number,
    name: string
} = {id:12, name:"aaaa"}

let myObjectWithOptinalName : {
    id:number,
    name?: string
} = {id:12}

let myObjectWithaliases : {
    id:number,
    name?: string,
    retire: (date:Date) => void
} = {id:12,
    name:'Bella',
    retire: (date:Date) => {
        console.log(date);
    }
}


type Employee = {
    readonly id: number,
    name?: string,
    retire: (date:Date) => void
}

function kgToLbs(weight: number | string):number{
    //narrowing
    if(typeof weight === 'number')
        return weight *2.2;
    else
        return parseInt(weight) * 2.2;
}

type Quantity = 50 | 100;

let quantity: Quantity = 100;





