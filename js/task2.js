const left = $(".left");
const arrow = $(".arrow");
const right = $(".right");

arrow.click(function () {
  if (left.width() > 0) {
    right.css("width", "100%");
    left.css("width", "0px");
    arrow.css("background-image", "url(../image/right_arrow.png)");
  } else {
    right.css("width", "74%");
    left.css("width", "25%");
    arrow.css("background-image", "url(../image/left_arrow.png)");
  }
});
