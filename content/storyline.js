body.onload="hidePart5(), hidePart6()"
/* Function to Hide 1st Page After Trigger */
function hidePart1() {
    document.querySelector(".part1").classList.remove("show");
    document.querySelector(".part1").classList.add("hide");
    document.querySelector(".part3").classList.remove("show");
    document.querySelector(".part3").classList.add("hide");
    document.querySelector(".part2").classList.add("show");
    document.querySelector(".part4").classList.remove("show");
    document.querySelector(".part4").classList.add("hide");
    document.querySelector(".part5").classList.remove("show");
    document.querySelector(".part5").classList.add("hide");
    document.querySelector(".part6").classList.remove("show");
    document.querySelector(".part6").classList.add("hide");
  }
  /* Function to Show 2nd Page After Trigger */
  function showPart3() {
    document.querySelector(".part1").classList.remove("hide");
    document.querySelector(".part1").classList.remove("show");
    document.querySelector(".part1").classList.add("hide");
    document.querySelector(".part2").classList.remove("hide");
    document.querySelector(".part2").classList.remove("show");
    document.querySelector(".part2").classList.add("hide");
    document.querySelector(".part3").classList.remove("hide");
    document.querySelector(".part3").classList.add("show");
    document.querySelector(".part4").classList.remove("show");
    document.querySelector(".part4").classList.add("hide");
    document.querySelector(".part5").classList.remove("show");
    document.querySelector(".part5").classList.add("hide");
    document.querySelector(".part6").classList.remove("show");
    document.querySelector(".part6").classList.add("hide");
  }
  /* Function to Show 3rd Page After Trigger */
  function showPart4() {
    document.querySelector(".part1").classList.remove("show");
    document.querySelector(".part1").classList.add("hide");
    document.querySelector(".part3").classList.remove("show");
    document.querySelector(".part3").classList.add("hide");
    document.querySelector(".part2").classList.remove("show");
    document.querySelector(".part2").classList.add("hide");
    document.querySelector(".part4").classList.remove("hide");
    document.querySelector(".part4").classList.add("show");
    document.querySelector(".part5").classList.remove("show");
    document.querySelector(".part5").classList.add("hide");
    document.querySelector(".part6").classList.remove("show");
    document.querySelector(".part6").classList.add("hide");
  }
  /* Function to Show 4th Page After Trigger */
  function showPart5() {
    document.querySelector(".part1").classList.remove("show");
    document.querySelector(".part1").classList.add("hide");
    document.querySelector(".part3").classList.remove("show");
    document.querySelector(".part3").classList.add("hide");
    document.querySelector(".part2").classList.remove("show");
    document.querySelector(".part2").classList.add("hide");
    document.querySelector(".part4").classList.remove("show");
    document.querySelector(".part4").classList.add("hide");
    document.querySelector(".part5").classList.remove("hide");
    document.querySelector(".part5").classList.add("show");
    document.querySelector(".part6").classList.remove("show");
    document.querySelector(".part6").classList.add("hide");
  }
 /* Function to Show 5th Page After Trigger */
  function showPart6() {
    document.querySelector(".part1").classList.remove("show");
    document.querySelector(".part1").classList.add("hide");
    document.querySelector(".part3").classList.remove("show");
    document.querySelector(".part3").classList.add("hide");
    document.querySelector(".part2").classList.remove("show");
    document.querySelector(".part2").classList.add("hide");
    document.querySelector(".part4").classList.remove("show");
    document.querySelector(".part4").classList.add("hide");
    document.querySelector(".part5").classList.remove("show");
    document.querySelector(".part5").classList.add("hide");
    document.querySelector(".part6").classList.remove("hide");
    document.querySelector(".part6").classList.add("show");
  }