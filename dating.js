document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        const place = this.getAttribute("data-place");

        if (type === "shopping") {
            // Redirect to shopping page
            window.location.href = "shopping.html";
        } else if (type === "games") {
            // Redirect to games page
            window.location.href = "games.html";
        } else if (type === "sleep") {
            // Redirect to games page
            alert(`好呀~~ 可是你可以试下按按其他的先~~ ${place}  💖`);
        } else {
            // Handle other activities
            alert(`好耶 游泳游泳游泳游泳${place}  💖`);
        }
    });
});
