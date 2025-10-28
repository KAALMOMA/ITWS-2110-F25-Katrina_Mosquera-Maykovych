let data;
async function fetchDishes() {
    try {
        const response = await fetch("/quiz01/my-restaurant/data/dishes.json")
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