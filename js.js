class testDrive{
    constructor(name){
       console.log("Constructor: tumi " + name)
    }
}

class manger extends testDrive{
    constructor(name){
        super(name)
        console.log("Constructor: Manager" + name)
    }
}

let person2 = new manger('maymud')

console.log(person2)