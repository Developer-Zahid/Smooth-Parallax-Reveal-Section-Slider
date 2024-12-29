new Swiper('[data-swiper="slider"]', {
    speed: 800,
    direction: "vertical",
    grabCursor: true,
    rewind: true,
    mousewheel: true,
    effect: "creative",
    creativeEffect: {
        prev: {
        translate: [0, "-100%", 1],
        },
        next: {
        translate: [0, "50%", -1],
        },
    },
});