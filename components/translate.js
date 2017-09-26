const React = require('react');
const translations = require('./translations');

const tokenizeRegex = new RegExp(`({:[a-zA-Z]*})`, 'g');
const translationKeyRegex = new RegExp(`{:([a-zA-Z]*)}`);

let id = 0;
const dummyReactElement = (input) => {
	id++;
	return React.createElement('span', {key : id}, input);
};
const realReactElement = (input) => {
	id++;
	return React.cloneElement(input, {key:id});
};

module.exports = (lang, key, values = {}) => {

	if (!translations[lang] || !translations[lang][key]) {
		throw new Error(`Translation for key ${key} for language ${lang} did not exist`);
	}

	// Got the correct translation, now insert values
	const children = [];
	const translatedTokenized = translations[lang][key].split(tokenizeRegex);

	for (const key in translatedTokenized) {
		if (translatedTokenized.hasOwnProperty(key)) {
			// check for a translation match
			const isTranslatable = translatedTokenized[key].match(translationKeyRegex);
			if (isTranslatable) {
				const translation = values[isTranslatable[1]];
				if (typeof(translation) === 'object') {
					children.push(realReactElement(translation));
				} else {
					children.push(dummyReactElement(translation));
				}
			} else {
				children.push(translatedTokenized[key]);
			}
		}
	}
	return dummyReactElement(children);
};
