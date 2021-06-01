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
	},
	{
		selector: '.img-caption',
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
		selector: '.teaser-block-card',
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
		selector: '.video__player',
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
];

const intersectionHandler = (entries, observer) => {
	for (entryProperty in entries) {
		const entry = entries[entryProperty];
		if (observer.ratioIsInViewport(entry.intersectionRatio)) {
			inViewport(entry.target);
			if (entry.target.classList.contains('video__player') && entry.target.readyState > 2) {
				entry.target.play();
			}
		}
		if (observer.ratioIsOutsideViewport(entry.intersectionRatio)) {
			outsideViewport(entry.target);
			if (entry.target.classList.contains('video__player')) {
				entry.target.pause();
			}
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

	const article = document.querySelector('.article');
	const infoBar = document.querySelector('.info-bar');
	const videoPlayer = document.querySelector('.video__player');
	const infoBarProgress = document.querySelector('.info-bar__progress-bar');
	let lastKnownScrollPosition = window.scrollY;
	let scrollHandlerThrottle = false;
	const showHideInfoBar = (scrollPosition) => {
		const articleBoundingClientRect = article.getBoundingClientRect();
		const articleScrollPositionStart = scrollPosition + articleBoundingClientRect.top;
		const articleScrollPositionEnd = scrollPosition + articleBoundingClientRect.bottom - window.innerHeight;
		if (scrollPosition > articleScrollPositionStart && scrollPosition < articleScrollPositionEnd) {
			const articleTotalScrollLength = (articleScrollPositionEnd * 0.95) - articleScrollPositionStart;
			const articleCurrentScrollLength = scrollPosition - articleScrollPositionStart
			let percentage = articleCurrentScrollLength / articleTotalScrollLength;
			percentage = Math.round(percentage * 10000) / 100;
			infoBarProgress.style.width = percentage + '%';
			infoBar.classList.add('show');
		}
		else {
			infoBar.classList.remove('show');
		}
	};
	showHideInfoBar(lastKnownScrollPosition);
	const documentScrollHandler = (event) => {
		lastKnownScrollPosition = window.scrollY;
		if (!scrollHandlerThrottle) {
			window.requestAnimationFrame(() => {
	      		showHideInfoBar(lastKnownScrollPosition);
	      		scrollHandlerThrottle = false;
			});
	    scrollHandlerThrottle = true;
		}
	};
	document.addEventListener('scroll', documentScrollHandler);

	

	const headerTitle = document.querySelector('.header__title');
	const headerTitleWords = headerTitle.textContent.split(' ');
	headerTitleWords.unshift('');
	const headerTitleTextContent = headerTitleWords.reduce((textContent, word) => {
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