class Survey {
	constructor(originData) {
		this.id = originData.id;
		this.title = originData.title;
		this.description = originData.description;

		this.style = {
			bg: originData.bgColor,
			text: originData.textColor
		};

		this.createdAt = originData.createdAt;
		this.closedIn = originData.closedIn;

		this.config = originData.config;
		this.results = originData.results;
		this.end = originData.end || false;
	}
}

const surveysStorage = [];

module.exports = {
	surveysStorage: surveysStorage,
	Survey: Survey
};