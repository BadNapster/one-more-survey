class User{
	constructor(originData) {
		this.name = originData.name;
		this.voted = originData.voted || [];
		this.created = originData.created || [];
		//this.is_admin = originData.is_admin || false;
	}
}

const userStorage = [
	new User({
		name: 'Napster',
		voted: [],
		created: [],
		//is_admin: true
	})
];


module.exports = {
	userStorage: userStorage,
	User: User
};
