var slideUp1 = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration: 700,
    easing: 'ease-in'
};

var slideUp2 = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration: 900,
    easing: 'ease-in'
};


var fadeIn1 = {
    opacity: 0,
    duration: 1000,
    easing: 'ease-in'
};

var fadeIn2 = {
    opacity: 0,
    duration: 1500,
    easing: 'ease-in'
};

ScrollReveal().reveal('.slide-up1', slideUp1);
ScrollReveal().reveal('.slide-up2', slideUp2);

ScrollReveal().reveal('.fade-in1', fadeIn1);
ScrollReveal().reveal('.fade-in2', fadeIn2);
