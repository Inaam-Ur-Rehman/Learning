let person = {
    name: "Ali",
    age: 24,
    getInfo: function (){
        return "Name of person is: "+ this.name + " and age is: "+ this.age
    },
    isLive: true
}

// person.email = "test@gmail.com"

// delete person.age

// console.log(person)
// console.log(person["age"])
console.log(person.getInfo())