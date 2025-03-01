document.addEventListener("DOMContentLoaded", function () {
    const mainFilter = document.getElementById("mainFilter"); // Główne sortowanie
    const subFilterContainer = document.getElementById("subFilterContainer"); // Div na drugi select
    const subFilter = document.getElementById("subFilter"); // Drugi select
    const trackCards = document.querySelectorAll(".card");

    // 🟢 Opcje do drugiego filtra
    const options = {
        "category": ["GT4", "Drift", "F1", "GT1", "GT2", "GT3", "Drag", "Rally", "WRC"],
        "country": ["Wielka Brytania", "Włochy", "Francja", "Stany Zjednoczone", "Niemcy", "Japonia", "Australia", "Belgia", 
        "Monako", "Meksyk", "Portugalia", "Zjednoczone Emiraty Arabskie", "RPA", "Bahrajn", "Finlandia", "Argentyna"],
        "length": ["Rosnąco", "Malejąco"]
    };

    // 🟢 Zmiana pierwszego selecta
    mainFilter.addEventListener("change", function () {
        const selectedValue = this.value;

        if (selectedValue === "all") {
            subFilterContainer.style.display = "none";
            showAllTracks();
        } else {
            updateSubFilter(selectedValue);
        }
    });

    // 🟢 Aktualizowanie drugiego selecta
    function updateSubFilter(type) {
        subFilter.innerHTML = ""; // Czyści stare opcje
        options[type].forEach(option => {
            const opt = document.createElement("option");
            opt.value = option;
            opt.textContent = option;
            subFilter.appendChild(opt);
        });

        subFilterContainer.style.display = "block";
    }

    // 🟢 Zmiana drugiego selecta → sortowanie
    subFilter.addEventListener("change", function () {
        const selectedMain = mainFilter.value;
        const selectedSub = this.value;

        if (selectedMain === "category") {
            filterByCategory(selectedSub);
        } else if (selectedMain === "country") {
            filterByCountry(selectedSub);
        } else if (selectedMain === "length") {
            sortByLength(selectedSub);
        }
    });

    // 🟢 Filtracja według kategorii
    function filterByCategory(category) {
        trackCards.forEach(card => {
            const categories = card.dataset.categories ? card.dataset.categories.split(",") : [];
            card.style.display = categories.includes(category) ? "block" : "none";
        });
    }

    // 🟢 Filtracja według kraju
    function filterByCountry(country) {
        trackCards.forEach(card => {
            card.style.display = card.dataset.country === country ? "block" : "none";
        });
    }

    // 🟢 Sortowanie według długości
    function sortByLength(order) {
        const trackContainer = document.querySelector(".grid");
        const sortedCards = Array.from(trackCards).sort((a, b) => {
            const lengthA = parseInt(a.dataset.length) || 0;
            const lengthB = parseInt(b.dataset.length) || 0;
            return order === "Rosnąco" ? lengthA - lengthB : lengthB - lengthA;
        });

        trackContainer.innerHTML = "";
        sortedCards.forEach(card => trackContainer.appendChild(card));
    }

    // 🟢 Pokazanie wszystkich torów
    function showAllTracks() {
        trackCards.forEach(card => card.style.display = "block");
    }
});
