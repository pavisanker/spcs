let slideI = 0;
shownews();

function shownews() {
  let j;
  let sli = document.getElementsByClassName("n1");
  for (j = 0; j < sli.length; j++) {
    sli[j].style.display = "none";  // Hide all elements
  }
  slideI++;
  if (slideI > sli.length) {
    slideI = 1;  // Reset to the first slide if we exceed the number of slides
  }
  sli[slideI - 1].style.display = "block";  // Show the current slide
  setTimeout(shownews, 3000);  // Recursive call to change the slide every 3 seconds
}
