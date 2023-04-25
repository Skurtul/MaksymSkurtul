var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
	},
	/* autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }, */
	loop: true,
});

var swiper2 = new Swiper(".mySwiper2", {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
});

