        // Get all the menu anchor tags
        const menuLinks = document.querySelectorAll('.menu-link');

        // Loop through the array of menu links and add dynamic classes
        menuLinks.forEach((link, index) => {
            if (index === 0) {
                link.classList.add('first');
            } else if (index === 1) {
                link.classList.add('second');
            } else if (index === 2) {
                link.classList.add('third');
            }
            // You can continue this pattern for more positions/classes
        });