const BaseUseCase = require('./baseUseCase');
const UserRepository = require('../../infrastructure/repositories/userRepository');


class TryLoginUseCase extends BaseUseCase {
	static async execute(params, req) {
		const user = await UserRepository.getUserByName(params.userid);

		let success = false;
		if (user !== null) {
			req.session.isLogin = true;
			req.session.user = user.id;
			if (user.name == 'Napster')
				req.session.isAdmin = true;
			else
				req.session.isAdmin = false;

			success = true;

			return { success: success, target: req.session.targetPage  };
		} else {
			return { success: success, error: 'Введён неверный логин'  };
		}
	}
}

module.exports = TryLoginUseCase;
