// var tl = new TimelineMax();

TweenLite.to("#header-container", 0, { y: "20vw", scaleY: 0 });
TweenLite.to("#header-container", 1, { scaleY: 1, transformOrigin: "center center", delay: 1 });
TweenLite.to("body", 1, { backgroundColor: "white", delay: 1 });

TweenLite.to("#top-bar", 0, { y: "-120px", opacity: 0 })
TweenLite.to("#top-bar", 0.5, { y: 0, opacity: 1, delay: 1.5, ease: "elastic.out(1, 0.5)" })