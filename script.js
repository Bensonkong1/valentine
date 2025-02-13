document.getElementById("yesBtn").addEventListener("click", function () {
    window.location.href = "yes.html"; // Redirect to the "yes" page
  });
  
  document.getElementById("noBtn").addEventListener("mouseover", function () {
    // Get the button's dimensions
    const buttonWidth = this.offsetWidth;
    const buttonHeight = this.offsetHeight;
  
    // Calculate max X and Y to keep the button within the viewport
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
  
    // Generate random X and Y coordinates within the visible area
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
  
    // Ensure the button doesn't go off-screen
    this.style.position = "fixed"; // Use fixed positioning to keep it in the viewport
    this.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
    this.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
    this.style.transition = "left 0.3s, top 0.3s";
  });