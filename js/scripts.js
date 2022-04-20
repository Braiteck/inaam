$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Благодарственные письма
	const lettersSliders = []

	$('.letters .swiper-container').each(function (i) {
		$(this).addClass('letters_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: true,
				noSwiping: true,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 16,
						slidesPerView: 2
					},
					768: {
						spaceBetween: 20,
						slidesPerView: 3
					},
					1024: {
						spaceBetween: 24,
						slidesPerView: 4
					},
					1280: {
						spaceBetween: 32,
						slidesPerView: 4
					}
				}
			}

		lettersSliders.push(new Swiper('.letters_s' + i, options))

		if (slides > lettersSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			lettersSliders[i].destroy(true, true)
			lettersSliders[i] = new Swiper('.letters_s' + i, options)
		}
	})


	// Благодарственные письма
	const textSliderSliders = []

	$('.text_block .slider .swiper-container').each(function (i) {
		$(this).addClass('text_slider_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 500,
				simulateTouch: false,
				allowTouchMove: true,
				noSwiping: true,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					0: {
						spaceBetween: 20,
						slidesPerView: 2
					},
					768: {
						spaceBetween: 16,
						slidesPerView: 3
					},
					1024: {
						spaceBetween: 20,
						slidesPerView: 3
					},
					1280: {
						spaceBetween: 32,
						slidesPerView: 4
					}
				}
			}

		textSliderSliders.push(new Swiper('.text_slider_s' + i, options))

		if (slides > textSliderSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			textSliderSliders[i].destroy(true, true)
			textSliderSliders[i] = new Swiper('.text_slider_s' + i, options)
		}
	})


	// Решения
	const solutionsSliders = []

	$('.solutions .swiper-container').each(function (i) {
		$(this).addClass('solutions_s' + i)

		let slides = $(this).find('.slide').length,
			options = {
				loop: false,
				speed: 750,
				simulateTouch: false,
				allowTouchMove: true,
				noSwiping: true,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				spaceBetween: 24,
				slidesPerView: 1
			}

		solutionsSliders.push(new Swiper('.solutions_s' + i, options))

		if (slides > solutionsSliders[i].params.slidesPerView) {
			options.loop = true
			options.simulateTouch = true
			options.allowTouchMove = true
			options.noSwiping = false

			solutionsSliders[i].destroy(true, true)
			solutionsSliders[i] = new Swiper('.solutions_s' + i, options)
		}
	})


	// Моб. меню
	$('header .mob_menu_btn').click(e => {
		e.preventDefault()

		if (!$('header .mob_menu_btn').hasClass('active')) {
			$('header .mob_menu_btn').addClass('active')
			$('body').addClass('menu_open')
			$('header .menu').addClass('show')
		} else {
			$('header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('header .menu').removeClass('show')
		}
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.projects .row').each(function () {
		projectHeight($(this), parseInt($(this).css('--projects_count')))
	})

	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})

	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



$(window).resize(() => {
	if (WW != $(window).width()) {
		// Перезапись ширины окна
		WW = $(window).width()

		// Выравнивание элементов в сетке
		$('.projects .row').each(function () {
			projectHeight($(this), parseInt($(this).css('--projects_count')))
		})

		$('.products .row').each(function () {
			productHeight($(this), parseInt($(this).css('--products_count')))
		})

		// Фикс. шапка
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > 0
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)
	}
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



// Выравнивание проектов
function projectHeight(context, step) {
	let start = 0,
		finish = step,
		$projects = context.find('.project')

	$projects.find('.name, .desc').height('auto')

	$projects.each(function () {
		setHeight($projects.slice(start, finish).find('.name'))
		setHeight($projects.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}


// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.name, .desc').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.name'))
		setHeight($products.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}