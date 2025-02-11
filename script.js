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

setInterval(() => {
    let heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-10px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 2s linear";
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
}, 300);
