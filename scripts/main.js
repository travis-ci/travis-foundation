$(document).ready(function() {
  $('.about-text h2, .about-text p, .people-body p').widowFix();

  $('.toggle').on('click', function(ev) {
    ev.preventDefault();
    $('.blog-sidebar').toggleClass('is-open');
  });

  var lineHeartContainer = document.querySelector('.about-hero');
  if (lineHeartContainer) {
    var lineHeartContainerOffset = lineHeartContainer.offsetTop;
    window.addEventListener('scroll', function(ev) {
      if (window.scrollY > lineHeartContainerOffset - 150) {
        lineHeartContainer.classList.add('is-animating');
      }
    });
  }
});
