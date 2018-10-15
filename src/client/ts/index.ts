(async () => {
	console.log("fetching: /.netlify/functions/foo");

	await fetch("/.netlify/functions/foo")
		.then(async response => {
			console.log(`response: "${await response.text()}"`)
		})
	
	console.log("fetching: /.netlify/functions/bar");
	
	await fetch("/.netlify/functions/bar")
		.then(async response => {
			console.log(`response: "${await response.text()}"`)
		})
})()