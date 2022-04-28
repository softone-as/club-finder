import DataSource from "../data/data-source.js";
import "../components/search-bar.js";
import "../components/club-list.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const clubListElement = document.querySelector("club-list");

	//promise
	// const onButtonSearchClicked = () => {
	// 	DataSource.searchClub(searchElement.value)
	// 		.then(renderResult)
	// 		.catch(fallbackResult);
	// };

	//async await
	const onButtonSearchClicked = async () => {
		try {
			const results = await DataSource.searchClub(searchElement.value);
			renderResult(results);
		} catch (error) {
			fallbackResult(error);
		}
	};

	const renderResult = (results) => {
		clubListElement.clubs = results;
	};

	const fallbackResult = (message) => {
		clubListElement.renderError = message;
	};

	searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
