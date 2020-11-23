class Human {

    constructor(name, gender){
        this._name = name;
        this.gender = gender;
    }

    greeting(){
        console.log(`Hello, my name is ${this._name}`);
    }

    get name(){
        return this._name;
    }

    set name(value){
        console.log(`change name from ${this._name} to ${value}`);
        this._name = value;
    }

}

class Child extends Human {
    constructor(foods, name, gender){
        super(name, gender);
        this._foods = foods;
    }

    greeting(){
        console.log(`Halo, my name is ${super.name}. Iam child~`);
    }

    eating(){
        console.log(`i eat ${this._foods}`);
    }
}

class Hospital{
    static recover(humans = []){
        humans.map(human => {
            console.log(`${human.name} has been recovered`);
        })  
    }
}

let erza = new Human('Erza Putra', 'Man');
let cynara = new Human('Cynara Nafisa Amanah', 'Woman');
erza.greeting();
cynara.greeting();

console.log(erza.name);
erza.name = 'Albasori';
erza.greeting();

let Arunika = new Child('Banana', 'Arunika', 'Girl');
Arunika.eating();
Arunika.greeting();

Hospital.recover([
    erza, cynara, Arunika
]);