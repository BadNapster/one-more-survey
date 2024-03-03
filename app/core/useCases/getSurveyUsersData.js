const BaseUseCase = require('./baseUseCase');
const SurveysRepository = require('../../infrastructure/repositories/surveysRepository');

class GetSurveyHistogramUsersDataUseCase extends BaseUseCase {
	static async execute(params) {
		const results = await SurveysRepository.getSurveyAnsweredUsers(params.id);

		return results;
	}
}

module.exports = GetSurveyHistogramUsersDataUseCase;
