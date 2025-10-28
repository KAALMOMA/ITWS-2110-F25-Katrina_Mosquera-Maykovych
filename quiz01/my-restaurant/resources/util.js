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

document.addEventListener("DishesReady", (event) => {
    let result = "<tr><th>Dish</th><th>Description</th><th>Category</th><th>Cuisine</th><th>Ingredients</th><th>Price (USD)</th></tr>";
    for (let i = 0; i < 4; ++i)
    {   
        const imgPath = data.dishes[i].image
        const name = "<td><b>" + data.dishes[i].name + "</b><br><img src=\"" + imgPath + "\" height=200px></img>" + "</td>"
        const desc = "<td>" + data.dishes[i].description + "</td>"
        const cate = "<td>" + data.dishes[i].category + "</td>"
        const cuis = "<td>" + data.dishes[i].cuisine + "</td>"
        let ingr = "<td>"
        for (let j = 0; j < data.dishes[i].ingredients.length; ++j)
        {
            if (j == data.dishes[i].ingredients.length-1) {
                ingr += data.dishes[i].ingredients[j]    
            }
            else {
                ingr += data.dishes[i].ingredients[j] + ", "
            }
        }
        ingr += "</td>"
        const pric = "<td>$" + data.dishes[i].price + "</td>"

        const row = name+desc+cate+cuis+ingr+pric
        result += "<tr>" + row + "</tr>"
        
    }

    const menu = document.getElementById("menu-items"); 
    menu.innerHTML = result;
});