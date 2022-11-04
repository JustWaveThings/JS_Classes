// https://javascript.info/class
// and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

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

/* class Button {
	constructor(value) {
		this.value = value;
	}
	click = () => {
		console.log(this.value);
	};
}

let button = new Button('hello there');

setTimeout(button.click, 5000); */

/* class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}
console.log(Rectangle.name);

Square = class Square2 {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
};
console.log(Square.name);
 */

/* class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	get area() {
		return this.calcArea();
	}

	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 10);

console.log(square.area);
console.log(square.calcArea()); */

/* class Polygon {
	constructor(...sides) {
		this.sides = sides;
	}
	*getSides() {
		for (const side of this.sides) {
			yield side;
		}
	}
}

const pentagon = new Polygon(1, 2, 3, 4, 5);

console.log([...pentagon.getSides()]); */

/* class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	static displayName = 'Point';
	static distance(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;

		return Math.hypot(dx, dy);
	}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.displayName);
console.log(Point.distance(p1, p2)); */

/* // public field class definitions

class Rectangle {
	height = 0;
	width;
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

// private field class definitions

class Rectangle2 {
	#height = 0;
	#width;
	constructor(height, width) {
		this.#height = height;
		this.#width = width;
	}
} */

// sub classing with extends

/* class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	speak() {
		console.log(`${this.name} barks`);
	}
}

const d = new Dog('Tango');
d.speak();
 */

/* class MyArray extends Array {
	static get [Symbol.species]() {
		return Array;
	}
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array); */

/* class Cat {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a noise`);
	}
}

class Lion extends Cat {
	speak() {
		super.speak();
		console.log(`${this.name} roars.`);
	}
}

const l = new Lion('Kashimaru');
l.speak(); */

const calculatorMixin = (Base) =>
	class extends Base {
		calc() {}
	};

const randomizerMixin = (Base) =>
	class extends Base {
		randomize() {}
	};

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
