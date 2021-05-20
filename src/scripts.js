const componentInViewDefinitions = [
	{
		selector: '.header',
		observerOptions: {
			root: null,
			rootMargin: '0px',
			threshold: [0.24, 0.26]
		},
		ratioIsInViewport: (ratio) => {
			if (ratio > 0.25) {
				return true;
			}
			else {
				return false;
			}
		},
		ratioIsOutsideViewport: (ratio) => {
			if (ratio < 0.25) {
				return true;
			}
			else {
				return false;
			}
		}
	},
	{
		selector: '.wysiwyg__paragraph',
		observerOptions: {
			root: null,
			rootMargin: '20px',
			threshold: [0, 0.01]
		},
		ratioIsInViewport: (ratio) => {
			if (ratio > 0) {
				return true;
			}
			else {
				return false;
			}
		},
		ratioIsOutsideViewport: (ratio) => {
			if (ratio === 0) {
				return true;
			}
			else {
				return false;
			}
		}
	},
	{
		selector: '.wysiwyg__drop-cap',
		observerOptions: {
			root: null,
			rootMargin: '10px',
			threshold: [0, 0.01]
		},
		ratioIsInViewport: (ratio) => {
			if (ratio > 0) {
				return true;
			}
			else {
				return false;
			}
		},
		ratioIsOutsideViewport: (ratio) => {
			if (ratio === 0) {
				return true;
			}
			else {
				return false;
			}
		}
	},
	{
		selector: '.wysiwyg__link',
		observerOptions: {
			root: null,
			rootMargin: '10px',
			threshold: [0, 0.01]
		},
		ratioIsInViewport: (ratio) => {
			if (ratio > 0) {
				return true;
			}
			else {
				return false;
			}
		},
		ratioIsOutsideViewport: (ratio) => {
			if (ratio === 0) {
				return true;
			}
			else {
				return false;
			}
		}
	}
];

const intersectionHandler = (entries, observer) => {
	for (entryProperty in entries) {
		const entry = entries[entryProperty];
		if (observer.ratioIsInViewport(entry.intersectionRatio)) {
			inViewport(entry.target);
		}
		if (observer.ratioIsOutsideViewport(entry.intersectionRatio)) {
			outsideViewport(entry.target);
		}
	}
}

const inViewport = (element) => {
		element.classList.add('entered-viewport');
		element.classList.add('in-viewport');
		element.classList.remove('outside-viewport');
	};

const outsideViewport = (element) => {
	element.classList.add('outside-viewport');
	element.classList.remove('in-viewport');
};

document.addEventListener("DOMContentLoaded", () => {

	const headerTitle = document.querySelector('.header__title');
	const headerTitleWords = headerTitle.textContent.split(' ');
	headerTitleWords.unshift('');
	const headerTitleTextContent = headerTitleWords.reduce((textContent, word) => {
		console.log(textContent);
		return textContent + '<span class="header__title-word">' + word + '</span> ';
	});
	headerTitle.innerHTML = headerTitleTextContent;

	const components = document.querySelectorAll('.js-viewport-transition');
	for (const component of components) {
		let componentInViewDefinition;
		for (const definition of componentInViewDefinitions) {
			if (component.matches(definition.selector)) {
				componentInViewDefinition = definition;
				break;
			}
		}
		if (componentInViewDefinition) {
			const observer = new IntersectionObserver(intersectionHandler, componentInViewDefinition.observerOptions);
			observer.ratioIsInViewport = componentInViewDefinition.ratioIsInViewport;
			observer.ratioIsOutsideViewport = componentInViewDefinition.ratioIsOutsideViewport;
			observer.observe(component);
		}
	}

});