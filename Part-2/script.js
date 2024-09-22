// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//     }
// })
// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })

/* gsap.from("#page2 #box", {
    scale:0,
    opacity:0,
    rotate:720,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end: "top 30%",
        scrub:2
    }
}) */

gsap.to("#page2 h1", {
    transform: "translateX(-180%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -500%",
        scrub: 10,
        pin: true
    }
})

