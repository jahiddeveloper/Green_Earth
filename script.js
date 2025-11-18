
// Load Category

let loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => {
            // console.log(json.categories)
            displayCategory(json.categories);
        })
}


let categoryId = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(json => {
            // console.log(json.plants);
            displayCategoryId(json.plants);
        })
}


// Load Cart 

let loadCart = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(json => {
        // console.log(json.plants)
        displayCategoryId(json.plants)
    })
}


let displayCategoryId = (plants) => {

    let cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    plants.forEach(plant => {
        let div = document.createElement("div")
        div.innerHTML = `
            <div
                class="card bg-base-100 w-94 shadow-lg mx-auto md:mx-0 block"
              >
                <figure>
                  <img
                    src="${plant.image}"
                    alt="Shoes"
                    class="p-2 h-55 w-full object-cover"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="text-xl font-bold">${plant.name}</h2>
                  <p>
                    ${plant.description}
                  </p>

                  <div class="flex justify-between items-center mt-3">
                    <div
                      class="text-[#15803d] px-5 py-2 bg-[#dcfce7] rounded-3xl"
                    >
                      <p>${plant.category}</p>
                    </div>
                    <div class="font-bold text-lg">
                      <p>৳ <span>${plant.price}</span></p>
                    </div>
                  </div>

                  <div class="card-actions justify-center mt-3">
                    <button
                      class="btn btn-primary w-full bg-[#15803d] border-none"
                    >
                      Add To Card
                    </button>
                  </div>
                </div>
              </div>
        `
        cartContainer.append(div);
    })
}

loadCart();
categoryId();


let displayCategory = (categories) => {

    let categoryContainer = document.getElementById("category-container");

    categories.forEach((category) => {

        let btn = document.createElement("button");
        btn.innerHTML = `
            <button onclick="categoryId(${category.id})"
                class="w-70 text-left py-3 pl-3 hover:bg-[#15803d] hover:text-white cursor-pointer hover:transition duration-300 rounded-lg"
              >
                ${category.category_name}
              </button>
        `
        categoryContainer.append(btn);
    })
}

loadCategory();