// var tl = new TimelineMax();

TweenLite.to("#header-container", 0, { y: "20vw", scaleY: 0 });
TweenLite.to("#header-container", 1, { scaleY: 1, transformOrigin: "center center", delay: 1 });
TweenLite.to("body", 1, { backgroundColor: "white", delay: 1 });