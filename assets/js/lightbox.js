window.addEventListener("load", function () {
  var pics = document.getElementsByClassName("article-img");
  for (var i = 0; i < pics.length; i++) {
    var pic = pics[i];

    pic.addEventListener("click", function () {
      console.log("add");
      this.parentElement.classList.add("lightbox");
      document.body.classList.add("lightbox-enabled");
    });
  }

  var closeBtns = document.getElementsByClassName("lightbox-close");
  for (var i = 0; i < closeBtns.length; i++) {
    var closeBtn = closeBtns[i];

    closeBtn.addEventListener("click", function () {
      console.log("remove");
      this.parentElement.classList.remove("lightbox");
      document.body.classList.remove("lightbox-enabled");
    });
  }
});
