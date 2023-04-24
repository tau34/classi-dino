var isDisplaying = false;
var isExist = false;

window.addEventListener("keydown", function (e) {
    if (e.code == "KeyD") {
        console.log(isExist)
        if (!isExist) {
            $("body").append("<iframe src=\"https://tsd-chrome-dino.vercel.app/\" width=\"800\" height=\"250\" class=\"dino\" style=\"position: fixed; bottom: 10px; right: 10px;\"></iframe>");
            isExist = true;
        }
        if (isDisplaying) {
            $(".dino").css("display", "none");
            isDisplaying = false;
        } else {
            $(".dino").css("display", "initial");
            isDisplaying = true;
        }
    } else {
        return false;
    }
});