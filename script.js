// 首頁圖形跟著滑鼠移動
document.addEventListener("mousemove", function(e) {
  const shapes = document.querySelectorAll(".floating-shape");

  shapes.forEach(function(shape, index) {
    const speed = (index + 1) * 0.025;

    const x = (window.innerWidth / 2 - e.pageX) * speed;
    const y = (window.innerHeight / 2 - e.pageY) * speed;

    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});


// 回到頂端按鈕
$(function () {
  $("#BackTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      333
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#BackTop").fadeIn(222);
    } else {
      $("#BackTop").stop().fadeOut(222);
    }
  }).scroll();
});