// https://javascript.info/class

// basic syntax
/* class MyClass {
  constructor() { ... }
  method1() {... }
  method2() {... }
  method3() {... }
  method4() {... }
  
} */

/* class User {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(this.name);
	}
}

let jacob = new User('Jacob');
jacob.sayHi();
console.log(jacob.name);
console.log(typeof User);
console.log(typeof jacob);
console.log(typeof jacob.name);
console.log(User.prototype);
console.log(typeof User.prototype);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));
 */
/* let Foo = class MyFoo {
	sayHi() {
		console.log(MyFoo);
	}
};

new Foo().sayHi(); */

/* function makeClass(phrase) {
	return class {
		sayHi() {
			console.log(phrase);
		}
	};
}

let User = makeClass('Hello');

new User().sayHi();

console.log(typeof User);
 */

/* class User {
	constructor(name) {
		this.name = name;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (value.length < 4) {
			console.log('Name is too short.');
			return;
		}
		this._name = value;
	}
}

let user = new User('Peneleope');
console.log(user.name);

user = new User('Joe');
console.log(user.name);
 */

/* class User {
	['say' + 'Hi']() {
		console.log('Hello');
	}
}

new User().sayHi(); */

/* class User {
	name = 'Jeffery';

	sayHi() {
		console.log(`Hello, ${this.name}!!!`);
	}
}

new User().sayHi();
let bob = new User();
bob.sayHi();
 */

/* class Button {
	constructor(value) {
		this.value = value;
	}
	click() {
		console.log(this.value);
	}
}

let button = new Button('hello there');

setTimeout(button.click, 5000);  // doesnt work --- undefined  */

class Button {
	constructor(value) {
		this.value = value;
	}
	click = () => {
		console.log(this.value);
	};
}

let button = new Button('hello there');

setTimeout(button.click, 5000);
