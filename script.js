console.log("Portfolio loaded successfully!");

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation clicked:", link.textContent);

    });

});