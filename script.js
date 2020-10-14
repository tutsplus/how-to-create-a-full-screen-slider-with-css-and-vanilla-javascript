document.body.onload = initSlider;

function initSlider() {
    // Define main containers
    const sliderContainer = document.getElementById('slider');
    const paginationContainer = document.createElement('div');
    
    // Create the pagination container
    paginationContainer.className = 'pagination';
    sliderContainer.prepend(paginationContainer);

    // Count the slides
    const slideCount = document.querySelectorAll('.slide').length;

    for (let i = slideCount; i > 0; i--) {
        // Generate the radio buttons
        let radioBtn = document.createElement('input');

        radioBtn.type = 'radio';
        radioBtn.name = 'slide-radios';
        radioBtn.className = 'slide-radio';
        radioBtn.id = `slide-radio-${i}`; // template literals in ES6 (notice the backticks instead of normal single quotes)
        if (i === 1) radioBtn.checked = true;

        // Append radio button to slider container
        sliderContainer.prepend(radioBtn);
        
        // Generate the labels
        let label = document.createElement('label');

        label.setAttribute('for', `slide-radio-${i}`);

        // Append label to pagination container
        paginationContainer.prepend(label);
    }

    // Automate the slider change
    let autoRun = setInterval(changeSlide, 5000);
    
    // Stop auto run at mouse enter
    paginationContainer.addEventListener('mouseenter', () => clearTimeout(autoRun));

    // Start auto run at mouse leave
    paginationContainer.addEventListener('mouseleave', () => autoRun = setInterval(changeSlide, 5000));
}

function changeSlide() {
    // Get the radio buttons
    const radioButtons = [...document.querySelectorAll('.slide-radio')]; // spread operator: http://es6-features.org/#SpreadOperator
    
    // Get the current index
    const currentIndex = radioButtons.findIndex(rb => rb.checked);

    // Check the next radio button
    radioButtons[(currentIndex + 1) % radioButtons.length].checked = true;
}