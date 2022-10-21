new gridjs.Grid({
	search: true,
	pagination: {
		limit: 3,
		enabled: true,
		summary: false
	},
	sort: true,
	columns: ["Title", "Director", "Producer"],
	server: {
		url: "https://swapi.dev/api/films/", // api url
		then: (data) =>
			data.results.map(
				(movie) => [movie.title, movie.director, movie.producer] // process data function
			)
	},
	style: {
		table: { width: "100%" },
		th: { backgroundColor: "#999", color: "#fff" }
	}
}).render(document.getElementById("tabla"));
