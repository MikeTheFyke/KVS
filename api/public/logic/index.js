// Loading Gsap
TweenLite.to("#header-container", 0, { y: "20vw", scaleY: 0 });
TweenLite.to("#vs-container", 0, { y: "-120px", opacity: 0 });
TweenLite.to("#yellow-star", 0, { y: "-120px", opacity: 0 });
TweenLite.to(".black-star", 0, { y: "-120px", opacity: 0 });
TweenLite.to("#header-links", 0, { y: "-22px", opacity: 0 })
TweenLite.to("#KVS-data", 0, { opacity: 0 })

TweenLite.to("#header-container", 1, { scaleY: 1, transformOrigin: "center center", delay: 1 });
TweenLite.to("body", 1, { backgroundColor: "white", delay: 1 });

TweenLite.to("#top-bar", 0, { y: "-120px", opacity: 0 })
TweenLite.to("#bottom-bar", 0, { y: "-240px", opacity: 0 })
TweenLite.to("#kenny-title", 0, { y: "-120px", opacity: 0, rotation: "-45" })
TweenLite.to("#spenny-title", 0, { y: "-120px", opacity: 0, rotation: "45" })

TweenLite.to(".black-star", 0.5, { y: 0, opacity: 1, delay: 1.5 });
TweenLite.to("#yellow-star", 0.5, { y: 0, opacity: 1, delay: 1.5 });
TweenLite.to("#yellow-star", 3.5, { delay: 1.5, rotation: 359, repeat: -1, ease: "Linear.easeInOut"  });
TweenLite.to("#top-bar", 0.5, { y: "50px", opacity: 1, delay: 1.5 })
TweenLite.to("#bottom-bar", 0.5, { y: 0, opacity: 1, delay: 1.5, ease: "elastic.out(1, 0.5)" })

TweenLite.to("#top-bar", 0.25, { y: 0, delay: 1.75, ease: "elastic.out(1, 0.5)" })
TweenLite.to("#kenny-title", 0.75, { y: 0, opacity: 1, delay: 1.75, rotation: 0, ease: "elastic.out(1, 0.5)" })
TweenLite.to("#spenny-title", 0.75, { y: 0, opacity: 1, delay: 1.75, rotation: 0, ease: "elastic.out(1, 0.5)" })
TweenLite.to("#vs-container", 0.5, { y: 0, opacity: 1, ease: "elastic.out(1, 0.5)", delay: 2.25 });

TweenLite.to("#header-container", 1, { y:0 , delay: 3})

TweenLite.to("#header-links", 0, { opacity: 1, delay: 3 })
TweenLite.to("#header-link-1", 0.5, { y: "20px", opacity: 1, delay: 3 })
TweenLite.to("#header-link-2", 0.5, { y: "20px", opacity: 1, delay: 3.25 })
TweenLite.to("#header-link-3", 0.5, { y: "20px", opacity: 1, delay: 3.5 })
TweenLite.to("#header-link-4", 0.5, { y: "20px", opacity: 1, delay: 3.75 })
TweenLite.to("#header-link-5", 0.5, { y: "20px", opacity: 1, delay: 4 })
TweenLite.to("#header-link-6", 0.5, { y: "20px", opacity: 1, delay: 4.25 })
TweenLite.to("#header-link-7", 0.5, { y: "20px", opacity: 1, delay: 4.5 })

TweenLite.to("#KVS-data", 0.5, { opacity: 1, delay: 5 })
// TweenLite.to(".KVS-Title", 0.5, { x: "100px", delay: 6 })
// ----------------------------------------------------------------------->

// On hover animation
// Header Link 1
document.getElementById("header-link-1").addEventListener('mouseover', function () { TweenLite.to("#header-link-1", 1, { scaleY: 2, transformOrigin: "top"}) })
document.getElementById("header-link-1").addEventListener('mouseout', function () { TweenLite.to("#header-link-1", 1, { scaleY: 1, transformOrigin: "bottom" }) })
// Header Link 2
document.getElementById("header-link-2").addEventListener('mouseover', function () { TweenLite.to("#header-link-2", 1, { scaleY: 2, transformOrigin: "top"}) })
document.getElementById("header-link-2").addEventListener('mouseout', function () { TweenLite.to("#header-link-2", 1, { scaleY: 1, transformOrigin: "bottom" }) })
// Header Link 3
document.getElementById("header-link-3").addEventListener('mouseover', function () { TweenLite.to("#header-link-3", 1, { scaleY: 2, transformOrigin: "top"}) })
document.getElementById("header-link-3").addEventListener('mouseout', function () { TweenLite.to("#header-link-3", 1, { scaleY: 1, transformOrigin: "bottom" }) })
// Header Link 4
document.getElementById("header-link-4").addEventListener('mouseover', function () { TweenLite.to("#header-link-4", 1, { scaleY: 2, transformOrigin: "top"}) })
document.getElementById("header-link-4").addEventListener('mouseout', function () { TweenLite.to("#header-link-4", 1, { scaleY: 1, transformOrigin: "bottom" }) })
// Header Link 5
document.getElementById("header-link-5").addEventListener('mouseover', function () { TweenLite.to("#header-link-5", 1, { scaleY: 2, transformOrigin: "top"}) })
document.getElementById("header-link-5").addEventListener('mouseout', function () { TweenLite.to("#header-link-5", 1, { scaleY: 1, transformOrigin: "bottom" }) })
// Header Link 6
document.getElementById("header-link-6").addEventListener('mouseover', function () { TweenLite.to("#header-link-6", 1, { scaleY: 2, transformOrigin: "top"}) })
document.getElementById("header-link-6").addEventListener('mouseout', function () { TweenLite.to("#header-link-6", 1, { scaleY: 1, transformOrigin: "bottom" }) })
// Header Link 7
document.getElementById("header-link-7").addEventListener('mouseover', function () { TweenLite.to("#header-link-7", 1, { scaleY: 2, transformOrigin: "top"}) })
document.getElementById("header-link-7").addEventListener('mouseout', function () { TweenLite.to("#header-link-7", 1, { scaleY: 1, transformOrigin: "bottom" }) })