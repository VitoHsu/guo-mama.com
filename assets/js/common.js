/**
 *
 * common.js
 *
 *
 */
(function($) {


	/**
	 *
	 *
	 * Variable
	 *
	 *
	 */
	///////////////////////////////////////////////////////////////
	// global
	///////////////////////////////////////////////////////////////
	const home_url = document.body.dataset.root;




	/**
	 *
	 *
	 * Settings
	 *
	 *
	 */
	///////////////////////////////////////////////////////////////
	// uaLite
	///////////////////////////////////////////////////////////////
	new cssVariable({
		vh: true,
		scrollbarWidth: true,
	});


	///////////////////////////////////////////////////////////////
	// uaLite
	///////////////////////////////////////////////////////////////
	new uaLite({
		device    : true,
		deviceType: true,
		browser   : true,
	});


	///////////////////////////////////////////////////////////////
	// uaLite
	///////////////////////////////////////////////////////////////
	window.addEventListener('load',function(){
		const effectFont1 = new isFont({ fontFamily : '游明朝体'}).result;
		const effectFont2 = new isFont({ fontFamily : 'Yu Mincho'}).result;
		const effectFont3 = new isFont({ fontFamily : 'YuMincho'}).result;
		const effectFont4 = new isFont({ fontFamily : 'ヒラギノ明朝 Pro'}).result;
		const effectFont5 = new isFont({ fontFamily : 'Hiragino Mincho Pro'}).result;

		if( effectFont1 == true || effectFont2 == true || effectFont3 == true || effectFont4 == true || effectFont5 == true ){
		} else{
			// alert('明朝体がありません');
			const link = document.createElement('link');
			link.setAttribute('href','https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400&display=swap');
			link.setAttribute('rel','stylesheet');
			document.head.appendChild( link );
		}
	});


	///////////////////////////////////////////////////////////////
	// canIUse
	///////////////////////////////////////////////////////////////
	new canIUse({
		webp  : true,
		tags  : null,
		styles: [
			['font-size: max( 2rem , 16px )','max'],
			['clip-path: polygon(0 0,100% 0,100% 100%,0 100%);-webkit-clip-path: polygon(0 0,100% 0,100% 100%,0 100%);','clip-path'],
		]
	});


	///////////////////////////////////////////////////////////////
	// isCurrent
	///////////////////////////////////////////////////////////////
	new isCurrent('a',{
		currentClass: 'is-current',
		contain     : true,
		containClass: 'is-contain',
	});

	///////////////////////////////////////////////////////////////
	// lazyload
	///////////////////////////////////////////////////////////////
	new lazyload('.js-lazyload',{
		position : 2,
		setClass : 'is-set',
		objectFit: true,

		getWindowSizeEvent: ['DOMContentLoaded','resize'],
		getScrollTopEvent : ['DOMContentLoaded','scroll'],
		setSourceEvent    : ['DOMContentLoaded','scroll'],
	});








	/**
	 *
	 *
	 * Common
	 *
	 *
	 */
	///////////////////////////////////////////////////////////////
	// addClass
	/////////////////////////////////////////////////////////////
	new addClass('body',{
		addClassEvent: ['load'],
		class        : 'is-load',
	});


	///////////////////////////////////////////////////////////////
	// smoothScroll
	///////////////////////////////////////////////////////////////
	const easingFuncs = new getEasing({
		easing: 'easeInOutExpo',
	});

	new smoothScroll('a[href^="#"]',{
		documentTop   : true,
		easingFunction: easingFuncs,
		minus         : [0],
		speed         : 1000,
	});







	/**
	 *
	 *
	 * Fixed
	 *
	 * l-header__innerの二つは、背景によって色が変化する。
	 * ベースの色を白とし、
	 * 要素に応じてを黒にしたい場合 その領域の要素にjs-fixed-blackをつける。
	 * js-fixed-black内にクローンを生成し、js-fixed-blackではclil-pathで領域外に表示されないようにして、
	 * 白黒を区別する。
	 *
	 */
	///////////////////////////////////////////////////////////////
	// headerClone
	///////////////////////////////////////////////////////////////
	const headerClone = function(){
		if( document.body.classList.contains('use-not-clip-path') ){
			return false;
		}

		const target = document.querySelectorAll('.js-fixed-white');
		const fixed  = document.querySelectorAll('.js-fixed');

		for ( let i = 0; i < target.length; i++ ) {
			for ( let i = 0; i < fixed.length; i++ ) {
				const clone = fixed[i].cloneNode(true);
				clone.classList.add('is-clone');
				target[i].appendChild( clone );
			}
		}
	}
	headerClone();







	/**
	 *
	 *
	 * Navigation
	 *
	 *
	 */
	///////////////////////////////////////////////////////////////
	// popup
	///////////////////////////////////////////////////////////////
	new popup('.l-button',{
		content        : '.l-sitemap',
		closeButton    : '.l-sitemap .l-button',
		breakPointDown : null,
		bodyFixed      : true,
		animationTime  : 0,
		bg             : false,
		smoothScroll   :'a[href^="#"]',
		popupOpenClass : 'is-open',
		buttonOpenClass: 'is-open',
		bodyOpenClass  : 'is-sitemap-open',
		basicId        : 'aria-sitemap',
		basicIdIndex   : false,

		onOpen : function( target , content ){
			const min = 1 ;
			const max = 3 ;

			const rand = Math.floor( Math.random() * (max + 1 - min) ) + min ;

			const remove_gallery = content.querySelectorAll('.l-sitemap__gallery li');
			const add_gallery    = content.querySelector('.l-sitemap__gallery li:nth-of-type('+ rand +')');

			for ( let i = 0; i < remove_gallery.length; i++ ) {
				remove_gallery[i].classList.remove('is-active');
			}
			add_gallery.classList.add('is-active');
		},
		onClose: null,
	});

	const lButtonHover = function(){
		const target = document.querySelectorAll('.l-button');

		for ( let i = 0; i < target.length; i++ ) {
			target[i].addEventListener('mouseenter',function(){
				document.body.classList.add('is-l-button-hover');
			},false);
			target[i].addEventListener('mouseleave',function(){
				document.body.classList.remove('is-l-button-hover');
			},false);
		}
	}
	lButtonHover();







	/**
	 *
	 *
	 * Effect
	 *
	 *
	 */
	///////////////////////////////////////////////////////////////
	// scrollClass
	///////////////////////////////////////////////////////////////
	new addClass('header[class*="p-hero"],.js-load-trigger',{
		timeout      : 200,
		addClassEvent: ['load'],
		class        : 'is-shown',
		position     : '',
	});

	new scrollClass('.js-trigger',{
	});


	///////////////////////////////////////////////////////////////
	// parallax
	///////////////////////////////////////////////////////////////
	new parallax('.js-parallax',{
		direction    : 'vertical',
		move         : -.09,
		speed        : 1,
		standard     : .5,
		centerMode   : true,
		reserveOffset: 0,
	});

	new parallax('.js-parallax2',{
		direction    : 'vertical',
		move         : .09,
		speed        : 1,
		standard     : .5,
		centerMode   : true,
		reserveOffset: 0,
	});

	new parallax('.js-parallax-img:not(.-hero)',{
		direction    : 'vertical',
		move         : -.09,
		speed        : 1,
		standard     : .5,
		centerMode   : true,
		reserveOffset: 0,
	});

	new parallax('.js-parallax-img.-hero',{
		direction    : 'vertical',
		move         : -.09,
		speed        : 1,
		standard     : 0,
		centerMode   : false,
		reserveOffset: 0,
	});





	/**
	 *
	 *
	 * Component
	 *
	 *
	 */
	///////////////////////////////////////////////////////////////
	// currentSection
	///////////////////////////////////////////////////////////////
	new currentSection('.js-currentSection',{
		section: '.js-currentSection__sections > section',
		navigation: '.js-currentSection__nav a',
	});


	///////////////////////////////////////////////////////////////
	// allocationHover
	///////////////////////////////////////////////////////////////
	new allocationHover('.js-allocation-hover',{
		hoverSelector: 'a',
	});


	///////////////////////////////////////////////////////////////
	// loopSlider
	///////////////////////////////////////////////////////////////
	imagesLoaded( document.querySelectorAll('.js-loopslider__content img'), function( instance ) {
		new loopSlider( '.js-loopslider__content', {
			type         : 'horizontal',
			centerStart  : false,
			clone        : 3,
			direction    : 'right to left',
			hover        : false,
			speed        : 0.4,
			addSize      : 20,
			breakPoint   : null,
			lazyload     : true,
			lazyloadDelay: 200,

			onInit: null,
		});
	});


	///////////////////////////////////////////////////////////////
	// lazyload
	///////////////////////////////////////////////////////////////
	new lazyload('.c-video video',{
		position : 2,
		setClass : 'is-set',
		objectFit: true,

		getWindowSizeEvent: ['DOMContentLoaded','resize'],
		getScrollTopEvent : ['DOMContentLoaded','scroll'],
		setSourceEvent    : ['load','scroll'],
	});


	///////////////////////////////////////////////////////////////
	// modal
	///////////////////////////////////////////////////////////////
	new modal('.c-thumbnail-container',{
		type          : 'video',
		bg            : true,
		bodyFixed     : true,
		bgPosition    : 'inner', // wapper or modal or inner
		buttonSelector: '.c-thumbnail',
		closePosition : 'inner', // navCenter or inner
		objectFit     : true,
		timeout       : 600,
		wrapper       : 'body',
		modalId       : 'modal',

		modalClasss         : ['js-modal'],
		modalInnerClasss    : ['js-modal__inner'],
		closeClasss         : ['js-modal__close'],
		bgClasss            : ['c-overlay'],
		navigationClasss    : ['js-modal__navigation'],
		navigationPrevClasss: ['js-modal__navigation__prev'],
		navigationNextClasss: ['js-modal__navigation__next'],

		videoClasss: ['js-modal__video'],

		closeInnerHTML         : '<button class="is-hover"><span></span><span></span></button>',
		navigationPrevInnerHTML: '',
		navigationNextInnerHTML: '',

		onOpen : null,
		onClose: null,
	});





	/**
	 *
	 *
	 * Project
	 *
	 *
	 */
	///////////////////////////////////////////////////////////////
	// assistHorizontalScroll
	///////////////////////////////////////////////////////////////
	// if( document.body.classList.contains('ua-pc') ){
		// new assistHorizontalScroll('.p-card2-container__body',{
		// 	innerSelector: '.p-card2-container__inner',
		// 	vertical     : false,
		// 	getSizeEvent : ['load','resize'],
		// });
	// }

	new scrollbar('.p-card2-container',{
		scrollElement     : 'element',
		scrollArea        : '.p-card2-container__body',
		scrollInner       : '.p-card2-container__inner',
		scrollbarContainer: '.p-card2-container__scrollbar',
		reverseHorizontal : false,

		setScrollbarSize: false,
		scrollbarMove   : true,

		verticalClass     : 'js-scrollbar__vertical',
		verticalTrackClass: 'js-scrollbar__track',

		horizontalClass     : 'js-scrollbar__horizontal',
		horizontalTrackClass: 'js-scrollbar__track',

		setScrollbarSizeEvent: ['DOMContentLoaded','resize'],
		getScrollbarSizeEvent: ['DOMContentLoaded','resize'],
		setTrackSizeEvent    : ['load','resize'],
		setTrackPositionEvent: ['load','resize','scroll'],
		getScrollTopEvent    : ['load','scroll'],
	});






})();