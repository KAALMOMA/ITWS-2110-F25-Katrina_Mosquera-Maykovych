let data;
async function fetchDishes() {
    try {
        const response = await fetch("data/dishes.json")
        if(!response.ok) {
            throw new Error("Could not fetch resource!");
        }

        data = await response.json();
        document.dispatchEvent(new CustomEvent("DishesReady", {detail: data}));
    }

    catch(error) {
        console.error(error);
    }
}

fetchDishes()