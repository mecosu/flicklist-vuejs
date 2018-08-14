

var api = {
	root: "https://api.themoviedb.org/3",
	token: "01dc2c51b71a82a0260fdb59684a0434"
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	fetch(`${api.root}/discover/movie?api_key=${api.token}`)
		.then(resp => resp.ok ? resp : Promise.reject(resp))
		.then(function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		})
}


console.log("The script loaded!");
testTheAPI();
