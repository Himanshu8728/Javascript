const name = "Himanshu     "
// console.log(name.trim().length)

console.log(name.truelength)

let Cars = ['BMW', 'Range_Rover']

let specs={
    BMW:"speed and looks",
    Range_Rover:"Looks and power",

    getRangeRover: function(){
        console.log(this.Range_Rover);
    }
}

Object.prototype.himanshu=function(){
    console.log(`yess ! im present in all object`);
}

specs.himanshu()
// console.log(typeof(himanshu))