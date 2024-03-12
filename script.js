document.addEventListener("DOMContentLoaded", function() {
    let stickyElement = document.getElementById("stick");
    let cartIcon = document.getElementById("stin");

    if (stickyElement && cartIcon) {
        let tooltip = document.createElement("div");
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

// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch cryptocurrency prices from CoinCap API
    async function fetchCryptoPrices() {
        try {
            const response = await fetch("https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,stellar,solana");
            const data = await response.json();

            // Update Bitcoin price
            const btcData = data.data.find(asset => asset.id === "bitcoin");
            document.getElementById("btcName").innerText = "Bitcoin ";
            document.getElementById("btcPrice").innerText = `$${parseFloat(btcData.priceUsd).toFixed(2)}`;
            document.getElementById("btcChange").innerText = `${parseFloat(btcData.changePercent24Hr).toFixed(2)}%`;

            // Update Ethereum price
            const ethData = data.data.find(asset => asset.id === "ethereum");
            document.getElementById("ethName").innerText = "Ethereum ";
            document.getElementById("ethPrice").innerText = `$${parseFloat(ethData.priceUsd).toFixed(2)}`;
            document.getElementById("ethChange").innerText = `${parseFloat(ethData.changePercent24Hr).toFixed(2)}%`;

            const xlmData = data.data.find(asset => asset.id === "stellar");
            document.getElementById("xlmName").innerText = "Stellar ";
            document.getElementById("xlmPrice").innerText = `$${parseFloat(xlmData.priceUsd).toFixed(2)}`;
            document.getElementById("xlmChange").innerText = `${parseFloat(xlmData.changePercent24Hr).toFixed(2)}%`;

            // Update Solana data
            const solData = data.data.find(asset => asset.id === "solana");
            document.getElementById("solName").innerText = "Solana ";
            document.getElementById("solPrice").innerText = `$${parseFloat(solData.priceUsd).toFixed(2)}`;
            document.getElementById("solChange").innerText = `${parseFloat(solData.changePercent24Hr).toFixed(2)}%`;

        } catch (error) {
            console.error("Error fetching cryptocurrency prices:", error);
        }
    }

    function autoRefresh() {
        fetchCryptoPrices();
    }

    // Call the fetchCryptoPrices function
    fetchCryptoPrices();

    setInterval(autoRefresh, 1000);
});




