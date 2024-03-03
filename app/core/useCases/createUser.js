const BaseUseCase = require('./baseUseCase');
const UserRepository = require('../../infrastructure/repositories/userRepository');

class CreateUserUseCase extends BaseUseCase{
	static async execute(params, request){
		if (params.userName === '')
			return {success: false, error: 'Пустое имя пользователя'};
		const result = await UserRepository.createUser(params.userName);
		request.session.user = result || undefined;
		request.session.isLogin = Boolean(result);
		if (request.session.isLogin)
			return { success: Boolean(result), target: request.session.targetPage };
		else
			return { success: Boolean(result), error: 'Данное имя уже занято' };
	}
}

module.exports = CreateUserUseCase;
