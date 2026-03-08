function getTranslateY() {
    if (window.innerWidth <= 480) return "70px";
    if (window.innerWidth <= 768) return "100px";
    return "150px";
}

function toggleLights() {
    const fanous = document.querySelector('.fanous');
    const ramadanText = document.querySelector('.ramadan-text');
    const crescentMoon = document.querySelector('.crescent-moon');

    fanous.classList.toggle('off');
    fanous.classList.toggle('on');

    const ty = getTranslateY();

    if (fanous.classList.contains('on')) {
        ramadanText.style.opacity = "1";
        ramadanText.style.transform = `translateY(${ty})`;
        
        crescentMoon.style.opacity = "1";
        crescentMoon.style.transform = `translateY(${ty})`;

        createStars(); 
    } else {
        ramadanText.style.opacity = "0";
        ramadanText.style.transform = "translateY(-100px)";
        
        crescentMoon.style.opacity = "0";
        crescentMoon.style.transform = "translateY(-100px)";

        clearStars(); 
    }
}

function createStars() {
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = ''; 

    const isMobile = window.innerWidth <= 480;
    const count = isMobile ? 40 : 90;
    const ty = getTranslateY();

    for (let i = 0; i < count; i++) { 
        let star = document.createElement('span');
        star.classList.add('star');
        
        let randomX = Math.random() * window.innerWidth; 
        let randomY = Math.random() * window.innerHeight * (isMobile ? 0.4 : 0.5); 
        let maxSize = isMobile ? 14 : 20;
        let minSize = isMobile ? 6 : 10;
        let randomSize = Math.random() * maxSize + minSize;

        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;
        
        setTimeout(() => {
            star.style.opacity = "1";
            star.style.transform = `translateY(${ty})`;
        }, 100);

        starsContainer.appendChild(star);
    }
}

function clearStars() {
    document.querySelector('.stars').innerHTML = ''; 
}
