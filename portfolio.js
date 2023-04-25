const portfolio = {
    header: {},
    
  };
  
  app.ready(e => {
    portfolio.header.bg = select(".portfolio-header-bg");
    const heroObserver = new IntersectionObserver((entries, observer) => {
      portfolio.header.bg.classList.toggle("scrolled-down", !entries[0].isIntersecting);
    }, { threshold: 0.4 });
    heroObserver.observe(select('.hero-section'));
  
    portfolio.header.outlines = selectAll(".tab, .tab-outline");
    portfolio.header.outlines.forEach(el => el.style.opacity = 0);
    select('.tab-container').style.opacity = 1;
  
    animate('.tab, .tab-outline', {
      translateY: [(el, i) => `${-i*5}px`, 0],
      scaleY: [0.8, 1],
      opacity: (el, i) => 1-i*0.08,
      delay: (el, i) => 500 + 50*i,
      duration: 1200,
      easing: "easeOutQuad"
    });
  
    animate(".hero-name-inner", {
      translateY: ["1.2em", 0],
      easing: "easeOutExpo",
      delay: (el, i) => 1200 + 130*i,
      duration: 1200
    });
  
    
  });
  
  
  
  