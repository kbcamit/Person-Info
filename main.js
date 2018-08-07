class Person {
  /*
  * Constructor of the person class
  * 
  * @param object
  */
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
  }

  /*
  * Get Name of the person
  * 
  * @param name of the object
  * return name
  */
  getName({ name = "" } = {}) {
    var name = name === "" ? this.name : name;
    console.log(name);
  }

  /*
  * Get Age of the person
  * 
  * @param age of the object
  * return age
  */
  getAge({ age = "" } = {}) {
    var age = age === "" ? this.age : age;
    console.log(age);
  }
}

var person = new Person({ name: "Kalyan", age: 23 });

person.getName({ name: "Amit", age: 23 });
person.getName();

person.getAge({ name: "Amit", age: 27 });
person.getAge();
