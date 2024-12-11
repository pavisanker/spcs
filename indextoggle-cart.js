function addcart(button) {
    if (button.innerHTML === "ADD TO CART") {
        button.innerHTML = "GO TO CART";
    } else {
        button.innerHTML = "ADD TO CART";
    }
}



function togglewili(button) {
    const currentBackground = getComputedStyle(button).backgroundImage;
    const hintText = button.nextElementSibling;
    
    if (currentBackground.includes('wiliw.png')) {
        button.style.backgroundImage = "url('images/wilib.png')"; // Alternate image
        hintText.textContent = 'REMOVE BOOKMARK';
    } else {
        button.style.backgroundImage = "url('images/wiliw.png')"; // Original image
        hintText.textContent= 'ADD TO BOOKMARK';
    }   
}