async function updateUsers(id){
	const userList = document.getElementById('histogramUsers');
	let userText = '';
	// eslint-disable-next-line no-undef
	const data = await sendRequest('getSurveyHistogramUsersData', {id: id});

	for (const [key, value] of Object.entries(data)) {
		if	(userText === '')
			userText = '<b>' + key + ':</b> ' +  value;
		else
			userText = userText + '<br><b>' + key + ':</b> ' +  value;
	}
	userList.innerHTML = userText;

}

async function generateHistogramUsers(id) {
	const userList = document.getElementById('histogramUsers');
	var userText = '';
	// eslint-disable-next-line no-undef
	const data = await sendRequest('getSurveyHistogramUsersData', {id: id});

	for (const [key, value] of Object.entries(data)) {
		if	(userText === '')
			userText = '<b>' + key + ':</b> ' +  value;
		else
			userText = userText + '<br><b>' + key + ':</b> ' +  value;
	}
	userList.innerHTML = userText;

	setInterval(async () => await updateUsers(id), 5000);
}

generateHistogramUsers(window.location.pathname.slice(8));
