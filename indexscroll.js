document.querySelectorAll('.scroll').forEach((scrollContainer) => {
    const content = scrollContainer.querySelector('.r4');
    let isScrolling = false;
    let scrollSpeed = 0;

    // Mouse move detection in the container
    scrollContainer.addEventListener('mousemove', (e) => {
        const containerWidth = scrollContainer.offsetWidth;
        const mouseX = e.clientX - scrollContainer.getBoundingClientRect().left;

        // Detect if the mouse is on the right side (scroll left)
        if (mouseX > containerWidth * 0.7) {
            isScrolling = true;
            scrollSpeed = (mouseX - containerWidth * 0.7) * 0.05; // Scroll left faster
            scrollContent(content, 'left');
        }
        // Detect if the mouse is on the left side (scroll right)
        else if (mouseX < containerWidth * 0.3) {
            isScrolling = true;
            scrollSpeed = (containerWidth * 0.3 - mouseX) * 0.05; // Scroll right (back) faster
            scrollContent(content, 'right');
        } else {
            isScrolling = false;
        }
    });

    // Stop scrolling when the mouse leaves the container
    scrollContainer.addEventListener('mouseleave', () => {
        isScrolling = false;
    });

    // Scroll the content based on the direction
    function scrollContent(content, direction) {
        if (isScrolling) {
            if (direction === 'left') {
                content.scrollLeft += scrollSpeed; // Scroll to the left
            } else if (direction === 'right') {
                content.scrollLeft -= scrollSpeed; // Scroll to the right (backward)
            }
            requestAnimationFrame(() => scrollContent(content, direction));
        }
    }
});

