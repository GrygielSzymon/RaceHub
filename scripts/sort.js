function sortTracks() {
    let selectedCategory = document.getElementById("categoryFilter").value;
    let tracks = document.querySelectorAll(".card");

    tracks.forEach(track => {
        let categories = track.dataset.categories ? track.dataset.categories.split(",") : []; // Zabezpieczenie przed undefined

        if (selectedCategory === "all" || categories.includes(selectedCategory)) {
            track.style.display = "block";
        } else {
            track.style.display = "none";
        }
    });
}
