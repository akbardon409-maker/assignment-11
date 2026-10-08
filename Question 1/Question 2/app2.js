let image = document.getElementById("myImage");
    image.addEventListener("mouseover", function() {
    image.classList.add("active");
});
    image.addEventListener("mouseout", function() {
    image.classList.remove("active");
});
