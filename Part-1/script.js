// gsap.to("#box1", {
//     x:1000,
//     duration: 2,
//     delay:2
// })
// gsap.to("#box2", {
//     x:1000,
//     duration:2,
//     delay:4,
//     y:200
// })





// gsap.to("#box1", {
//     x:1000,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "white",
//     borderRadius:"50%",
//     scale:.5,
//     repeat:-1,
//     yoyo:"ture"
// })
// gsap.to("#box2", {
//     x:1000,
//     duration:2,
//     delay:1,
//     scale:.5,
//     rotate: 360,
//     borderRadius:"50%",
//     backgroundColor: "pink",
//     yoyo:"true",
//     repeat: -1,
// })




var tl = gsap.timeline();
tl.to("#box1",{
    x:1000,
    duration:2,
    repeat:-1,
    rotate:360,
    scale:.5,
    yoyo:"ture"
})

tl.to("#box2",{
    x:1000,
    duration:2, 
    repeat:-1,
    borderRadius:"50%",
    rotate: 360,
    yoyo:"ture"
})
tl.to("#box3",{
    y:-500,
    x:500,
    duration:2,
    backgroundColor:"blue",
    repeat:-1,
    yoyo:"ture",
})
