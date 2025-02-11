document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "yes.html"; // Redirect to the "yes" page
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 100);
    
    this.style.transition = "left 0.3s, top 0.3s"; // Smooth movement
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
