
// Load Category

let loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => {
            // console.log(json.categories)
            displayCategory(json.categories);
        })
}

let displayCategory = (categories) => {

    let categoryContainer = document.getElementById("category-container");

    categories.forEach((category) => {

        let btn = document.createElement("button");
        btn.innerHTML = `
            <button
                class="w-70 text-left py-3 pl-3 hover:bg-[#15803d] hover:text-white cursor-pointer hover:transition duration-300 rounded-lg"
              >
                ${category.category_name}
              </button>
        `
        categoryContainer.append(btn);
    })
}

loadCategory();