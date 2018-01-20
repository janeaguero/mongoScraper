var db = require("../modelos");
var scrape = require("../scripts/scrape");

module.exports = {
	scrapeHeadlines: function(req, res) {
		return scrape()
			.then(function(articulos) {
				return db.Headline.create(articulos);
			})
			.then(function(dbHeadline) {
				if (dbHeadline.lenght === 0) {
					res.json({
						message: "No hay articulos nuevos hoy. Que revisaras manana."
					});
				} else {
					res.json({
						message: dbHeadline.length + " articulos nuevos anadido!"
					});
				}
			})
			.catch(function(err) {
				res.json({
					message: "Scrape completo!!"
				});
			});
	}
};