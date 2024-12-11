let slideIn = 0;  // Use 'slideIn' instead of 'slideInn'
showoffers();

function showoffers() {
  let k;
  let slid = document.getElementsByClassName("off");
  
  // Hide all elements
  for (k = 0; k < slid.length; k++) {
    slid[k].style.display = "none";  // Corrected 'j' to 'k'
  }

  slideIn++;
  if (slideIn > slid.length) {
    slideIn = 1;  // Reset to the first slide if we exceed the number of slides
  }
  
  slid[slideIn - 1].style.display = "block";  // Show the current slide
  
  setTimeout(showoffers, 3000);  // Recursive call to change the slide every 3 seconds
}
