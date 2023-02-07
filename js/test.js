class Person {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("Hi, my name is" + this.name);
  }
}

const man = new Person("Kevin");

Person.speak();
