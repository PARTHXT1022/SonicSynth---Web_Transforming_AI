function codepen(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    
      // follwoing line is not required to work pinning on touch screen
    
      /* pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"*/
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
    
}
codepen()

function effect(){
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove", function(val){
        gsap.to(cursor, {
            x:val.x,
            y:val.y
        }) 
    })

    page1Content.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale:0,
            opacity:1
        })
    })

}
effect()
function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%", // Adjusted start position
            end: "top 50%",   // Adjusted end position
            scrub: 2
        }
    });
}

page2Animation();

function page4Animation() {
    gsap.from(".elem h4", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 44%", // Adjusted start position
            end: "top 55%",   // Adjusted end position
            scrub: 2
        }
    });
}


page4Animation()

function gsapfooter(){
    gsap.from("#footer", {
        y: "100%", // Initial position
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main", // Use your specific scroller ID
            start: "top bottom", // Trigger when the top of the footer reaches the bottom of the viewport
            end: "bottom top", // Trigger when the bottom of the footer reaches the top of the viewport
            // scrub: true, // Smoothly transition
        }
    });
}

gsapfooter()