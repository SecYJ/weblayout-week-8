// initialize AOS
AOS.init();

// 各式各样的课程
const variousCourses = new Swiper(".variousCourses", {
	slidesPerView: 2,
	spaceBetween: 15,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	grid: {
		rows: 2,
		fill: "row",
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
		992: {
			slidesPerView: 1.4,
			spaceBetween: 30,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
	},
});

// 师资介绍
const teacherIntro = new Swiper(".teacher-intro", {
	slidesPerView: 1,
	spaceBetween: 0,
	grid: {
		rows: 3,
		fill: "column",
	},
	breakpoints: {
		768: {
			slidesPerView: 2.1,
			spaceBetween: 30,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
		992: {
			slidesPerView: 3.2,
			spaceBetween: 30,
			grid: {
				rows: 1,
				fill: "row",
			},
		},
	},
});

// 课程推荐
const coursesRecommend = new Swiper(".courses-recommend", {
	slidesPerView: 1.3,
	spaceBetween: 30,
	loop: true,
	grid: {
		rows: 1,
		fill: "row",
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 4.3,
			spaceBetween: 30,
		},
	},
});

// 课程等级
const courseLevel = new Swiper(".course-level", {
	slidesPerView: 1,
	spaceBetween: 30,
	grid: {
		row: 3,
		fill: "column",
	},
	breakpoints: {
		768: {
			slidesPerView: 2.1,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

// 学生评价
const studentReview = new Swiper(".student-review", {
	slidesPerView: 1,
	spaceBetween: 8,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	grid: {
		rows: 3,
		fill: "column",
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
			grid: {
				rows: 2,
				fill: "row",
			},
		},
	},
	navigation: {
		prevEl: ".student-review-left-arrow",
		nextEl: ".student-review-right-arrow",
	},
});
