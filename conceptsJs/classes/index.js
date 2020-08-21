const animal= {
    name: 'Animal',
    age: 4,
    hasTail: true
}
console.log(animal)

class Animal{
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice(){
        console.log('I am animal..Rrrr!!')
    }
}

const anotherAnimal = new Animal({
    name: 'Animal two',
    age: 23,
    hasTail: true
})