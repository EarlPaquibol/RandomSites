//how to create an object
let car = {
    color: "Blue",
    age: 7,
    type: "Racing",
    drive: function(){
        console.log("Driving fast!");
    }
}                                                       
car.color = 27;
console.log(car.color);        //check its values

//constructor for objects
function Car (color, age, type){                       
    this.color = color;
    this.age = age;
    this.type = type;
    this.drive = function(){
        console.log("Driving fast!");
    }
}
let car = new Car("Blue", 7, "Racing");    //object created from the constructor        
console.log(car.color);          //same as above but created from a constructor   



//another example of a constructor
function HouseKeeper (yearsOfExperience, name, cleaningRepertorie){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertorie = cleaningRepertorie;
    this.clean = function(){
        alert("Cleaning in progress...");
    }
}

let houseKeeper1 = new HouseKeeper (9, "Tom", ["lobby", "cabinet"]);
houseKeeper1.clean();

