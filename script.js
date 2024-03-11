document.addEventListener("DOMContentLoaded", function() {
    var stickyElement = document.getElementById("stick");
    var cartIcon = document.getElementById("stin");

    if (stickyElement && cartIcon) {
        var tooltip = document.createElement("div");
        tooltip.innerHTML = "Buy Crypto";
        tooltip.className = "tooltip";
        document.body.appendChild(tooltip);

        stickyElement.addEventListener("mouseover", function() {
            stickyElement.style.borderRadius = "10px";
            stickyElement.style.width = "120px";
            stickyElement.style.display = "flex";
            stickyElement.style.alignItems = "center";
            stickyElement.style.justifyContent = "center";
            stickyElement.innerHTML = "Buy Crypto";
            tooltip.style.display = "none";
            cartIcon.style.display = "none";
        });

        stickyElement.addEventListener("mouseout", function() {
            stickyElement.style.borderRadius = "50%";
            stickyElement.style.width = "60px";
            stickyElement.style.display = "flex";
            stickyElement.style.alignItems = "center";
            stickyElement.style.justifyContent = "center";
            stickyElement.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
            tooltip.style.display = "none";

            cartIcon.style.display = "flex";
        });
    } else {
        console.error("Element with ID 'stick' or 'stin' not found");
    }
});