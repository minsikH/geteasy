document.querySelectorAll(".bot_menu_area a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    // 클릭된 링크의 href 속성을 가져옴
    const targetSectionId = this.getAttribute("href");

    // 해당 위치로 스크롤
    document.querySelector(targetSectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    event.preventDefault();
  });
});
