// var tl = new TimelineMax();

TweenLite.to("#header-container", 0, { y: "20vw", scaleY: 0 });
TweenLite.to("#vs-container", 0, { y: "-120px", opacity: 0 });
TweenLite.to("#header-container", 1, { scaleY: 1, transformOrigin: "center center", delay: 1 });
TweenLite.to("body", 1, { backgroundColor: "white", delay: 1 });

TweenLite.to("#top-bar", 0, { y: "-120px", opacity: 0 })
TweenLite.to("#bottom-bar", 0, { y: "-240px", opacity: 0 })
TweenLite.to("#kenny-title", 0, { y: "-120px", opacity: 0, rotation: "-45" })
TweenLite.to("#spenny-title", 0, { y: "-120px", opacity: 0, rotation: "45" })

TweenLite.to("#top-bar", 0.5, { y: "50px", opacity: 1, delay: 1.5 })
TweenLite.to("#bottom-bar", 0.5, { y: 0, opacity: 1, delay: 1.5, ease: "elastic.out(1, 0.5)" })

TweenLite.to("#top-bar", 0.25, { y: 0, delay: 1.75, ease: "elastic.out(1, 0.5)" })
TweenLite.to("#kenny-title", 0.75, { y: 0, opacity: 1, delay: 1.75, rotation: 0, ease: "elastic.out(1, 0.5)" })
TweenLite.to("#spenny-title", 0.75, { y: 0, opacity: 1, delay: 1.75, rotation: 0, ease: "elastic.out(1, 0.5)" })
TweenLite.to("#vs-container", 0.5, { y: 0, opacity: 1, ease: "elastic.out(1, 0.5)", delay: 2.25 });