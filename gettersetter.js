//https://javascript.info/property-accessors

let obj = {
	get propName() {
		// getter - executed on obj.propName
	},
	set propName(value) {
		// setter - executed on setting obj.propName = value
	},
};

/* let user = {
	name: 'Joe',
	surname: 'Zachs',

	get fullName() {
		return `${this.name} ${this.surname}`;
	},

	set fullName(value) {
		[this.name, this.surname] = value.split(' ');
	},
};

console.log(user.fullName);
user.fullName = 'Terry Silver';
console.log(user.fullName);
console.log(user.name); */

let user = {
	get name() {
		return this._name;
	},

	set name(value) {
		if (value.length < 4) {
			console.log('Name too short - must be at least 4 characters');
			return;
		}
		this._name = value;
	},
};

user.name = 'Samantha';
console.log(user.name);
user.name = 'Sam';
console.log(user.name);
