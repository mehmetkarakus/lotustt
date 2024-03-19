window.addEventListener("scroll", function() {
    var beyazLogo = document.querySelector(".logo__white");
    var siyahLogo = document.querySelector(".logo__dark");
    var threshold = 100; // Scroll eşiği, logonun ne zaman görünür hale geleceğini belirler

    // Ekran genişliği 768 pikselin altında olduğunda
    if (window.innerWidth >= 768) {
        if (window.pageYOffset > threshold) {
            beyazLogo.style.display = "none";
            siyahLogo.style.display = "block";
        } else {
            beyazLogo.style.display = "block";
            siyahLogo.style.display = "none";
        }
    } else {
        // 768 pikselin altında ise, herhangi bir işlem yapma
        beyazLogo.style.display = "none";
        siyahLogo.style.display = "block";
    }
});
