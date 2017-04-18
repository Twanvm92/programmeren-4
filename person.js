var voornaam = 'Henk';
var achternaam = 'van de Broek';
var woonplaats = 'Kakkerdam';

function i18l(language) {
	switch(language) {
		case 'nl' :
			return( {
				voornaam : voornaam,
				achternaam : achternaam,
				woonplaats : woonplaats
			})
			break;

		default:
		case 'uk' :
			return( {
				voornaam : voornaam,
				achternaam : achternaam,
				woonplaats : woonplaats
			})
			break;
	}
}

module.exports = { i18l };