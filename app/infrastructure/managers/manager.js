const TryLoginUseCase = require('../../core/useCases/tryLogin');
const ListSurveysUseCase = require('../../core/useCases/listSurveys');
const ListVotedSurveysUseCase = require('../../core/useCases/listVotedSurveys');
const LogoutUseCase = require('../../core/useCases/logoutUseCase');
const RenderSurveyDataUseCase = require('../../core/useCases/renderSurveyData');
const GetSurveyHistogramDataUseCase = require('../../core/useCases/getSurveyData');
const GetSurveyHistogramUsersDataUseCase = require('../../core/useCases/getSurveyUsersData');
const CloseSurveyUseCase = require('../../core/useCases/closeSurvey');
const ReplySurveyUseCase = require('../../core/useCases/replySurvey');
const CreateSurveyUseCase = require('../../core/useCases/createSurvey');
const CreateUserUseCase = require('../../core/useCases/createUser');
const GetNameUseCase = require('../../core/useCases/getName');
const log4js = require('log4js');
const logger = log4js.getLogger('manager');

class HandlerFactory{
	createHandler(methodName, useCase){
		const handler = {};
		handler[methodName] = useCase;
		return handler;
	}
}

class Manager{
	constructor() {
		this.handlers = [];
	}

	addHandler(handler){
		this.handlers.push(handler);
	}

	tryExecute(methodName, args, request){
		logger.info(`Call ${methodName} with ${JSON.stringify(args, null, 2)} as ${request.session.user}`);
		for (const handler of this.handlers)
			if (Object.getOwnPropertyNames(handler).includes(methodName))
				return handler[methodName].execute(args, request);
	}
}

const handlers = new HandlerFactory();
const manager = new Manager();

//set handlers to methods
manager.addHandler(handlers.createHandler('listCreatedSurveys', ListSurveysUseCase));
manager.addHandler(handlers.createHandler('listVotedSurveys', ListVotedSurveysUseCase));
manager.addHandler(handlers.createHandler('tryLogin', TryLoginUseCase));
manager.addHandler(handlers.createHandler('logout', LogoutUseCase));
manager.addHandler(handlers.createHandler('renderSurvey', RenderSurveyDataUseCase));
manager.addHandler(handlers.createHandler('getSurveyHistogramData', GetSurveyHistogramDataUseCase));
manager.addHandler(handlers.createHandler('getSurveyHistogramUsersData', GetSurveyHistogramUsersDataUseCase));
manager.addHandler(handlers.createHandler('closeSurvey', CloseSurveyUseCase));
manager.addHandler(handlers.createHandler('replySurvey', ReplySurveyUseCase));
manager.addHandler(handlers.createHandler('createSurvey', CreateSurveyUseCase));
manager.addHandler(handlers.createHandler('createUser', CreateUserUseCase));
manager.addHandler(handlers.createHandler('getName', GetNameUseCase));
logger.info('Manager init');

module.exports = Object.freeze(manager);
