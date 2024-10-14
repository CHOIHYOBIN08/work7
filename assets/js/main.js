//스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})

gsap.ticker.lagSmoothing(0)

//메뉴 클릭 시 해당 섹션 이동
$('.gnb .gnb-item a').click(function(e){
  e.preventDefault(e);

  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
})


//헤더 나타나기
var lastScrollTop = 0;
$(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        // 스크롤을 내릴 때 헤더 숨기기
        $('#header').slideUp();
    } else {
        // 스크롤을 올릴 때 헤더 나타내기
        $('#header').slideDown();
    }
    lastScrollTop = st;
});

//텍스트 흐르게
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".sc-scroll-text .text-list").forEach(function(element) {
    gsap.to(element, {
        x: () => -window.scrollY / 20 + '%',
        ease: "none",
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

//프로젝트
gsap.set('.sc-project .project-item .thumb video',{
  scale:3,
  yPercent:0,
})

$('.sc-project .project-item').each(function(){
  gsap.to($(this).find('.thumb video'),{
    scrollTrigger:{
      trigger: $(this),
      start: "top 100%",
      end: "bottom 0%",
      scrub: true,
    },
    scale:2,
    yPercent:60
  
  })

})
gsap.set('.sc-project .project-item .thumb img',{
  scale:3,
  yPercent:0,
})

$('.sc-project .project-item').each(function(){
  gsap.to($(this).find('.thumb img'),{
    scrollTrigger:{
      trigger:$(this),
      start: "top 100%",
      end: "bottom 0%",
      scrub:true,
    },
    scale:2,
    yPercent:60
  
  })

})

//텍스트 스크롤 
const scrollTxt = new SplitType('.sc-fade-text .txt', { types: 'words, chars', });


  gsap.to('.sc-fade-text .char', {
    scrollTrigger: {
      trigger: '.sc-fade-text',
      start: '0% 100%',
      end: '20%',
      scrub: true,
    },
    duration:0,
    color:'#fff',
    stagger:0.1,
  });

  //마우스커서
  const glowImage = $('.sc-fade-text .fade-wrapper .glow-track img');
  const fadeTextSection = $('.sc-fade-text');

  // 마우스 움직임 감지
  fadeTextSection.on('mousemove', function(e) {

      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;


      gsap.to(glowImage, {
          x: x,
          y: y,
          duration: 0.5, 
          ease: "power3.out" 
      });
  });

  //메뉴버튼

  $('#header .btn-menu').click(function(e){
    e.preventDefault(); 
    $('html').addClass('hidden')
    $('.nav-menu').addClass('show');
  })
  $('.nav-menu .nav-close').click(function(){
    $('.nav-menu').removeClass('show');
  })
