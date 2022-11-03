//https://javascript.info/property-accessors

let obj = {
	get propName() {
		// getter - executed on obj.propName
	},
	set propName(value) {
		// setter - executed on setting obj.propName = value
	},
};

let user = {
	name: 'Joe',
	surname: 'Zachs',

	get fullName() {
		return `${this.name} ${this.surname}`;
	},
};

console.log(user.fullName);
