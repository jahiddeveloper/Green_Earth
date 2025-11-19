
// Load Category

let loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(json => {
      // console.log(json.categories)
      displayCategory(json.categories);
    })
}

// Modal

let my_modal_5 = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then(res => res.json())
    .then(json => {
      // console.log(json.plants)
      displayDetails(json.plants)
    })
}

displayDetails = (details) => {

  let detailsContainer = document.getElementById("details-container");

  detailsContainer.innerHTML = `
            <h1 class="text-2xl font-bold">${details.name}</h1>
              <figure>
                  <img
                    src="${details.image}"
                    alt="Shoes"
                    class="p-2 h-70 w-full object-cover rounded-2xl"
                  />
                </figure>
              <p class="mt-4 leading-8">
                ${details.description}
              </p>

              <div class="flex justify-between items-center mt-3">
                <div class="text-[#15803d] px-5 py-2 bg-[#dcfce7] rounded-3xl">
                  <p>${details.category}</p>
                </div>
                <div class="font-bold text-lg">
                  <p>৳ <span class="cart-price">${details.price}</span></p>
                </div>
              </div>
  `
  document.getElementById("my_modal_5").showModal();
}

my_modal_5();

// Remove active

let removeActive = () => {
  let allBtns = document.querySelectorAll(".all-btn");
  allBtns.forEach(allBtn => {
    allBtn.classList.remove("active");
  })
}


// Category Id

let categoryId = (id) => {

  document.getElementById("plant-container").classList.add("hidden");
  document.getElementById("loading-spinner").classList.remove("hidden");

  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(json => {

      removeActive();
      let categoryBtn = document.getElementById(`category-btn-${id}`);
      categoryBtn.classList.add("active");
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
                  onclick="my_modal_5(${plant.id})"
                    src="${plant.image}"
                    alt="Shoes"
                    class="p-2 h-55 w-full object-cover cursor-pointer"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="text-xl font-bold plant-name">${plant.name}</h2>
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
                      <p>৳ <span class="cart-price">${plant.price}</span></p>
                    </div>
                  </div>

                  <div class="card-actions justify-center mt-3">
                    <button onclick="addToCart(this)"
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
  document.getElementById("plant-container").classList.remove("hidden");
  document.getElementById("loading-spinner").classList.add("hidden");
}

let count = 0;

let addToCart = (addBtns) => {

  let cart = addBtns.parentNode.parentNode
  let cartName = cart.querySelector(".plant-name").innerText;
  let cartPrice = parseInt(cart.querySelector(".cart-price").innerText)


  // console.log(cartName, cartPrice)

  let addToCartContainer = document.getElementById("addToCart-container");

  let div = document.createElement("div");
  div.innerHTML = `
              <div
                class="flex justify-between items-center mt-2 shadow-sm py-3 px-3 bg-white rounded-lg"
              >
                <div>
                  <h1 class="text-lg font-bold">${cartName}</h1>
                  <p class="text-gray-500 mt-1">
                    ৳ <span>${cartPrice}</span> x <span>1</span>
                  </p>
                </div>

                <div
                  class="hover:text-red-500 cursor-pointer hover:transition duration-300"
                >
                  <i class="fa-solid fa-x"></i>
                </div>
              </div>
  `
  addToCartContainer.append(div);
}


loadCart();
categoryId();


let displayCategory = (categories) => {

  let categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {

    let btn = document.createElement("button");
    btn.innerHTML = `
            <button id="category-btn-${category.id}" onclick="categoryId(${category.id})"
                class="all-btn w-70 text-left py-3 pl-3 hover:bg-[#15803d] hover:text-white cursor-pointer hover:transition duration-300 rounded-lg"
              >
                ${category.category_name}
              </button>
        `
    categoryContainer.append(btn);
  })
}

loadCategory();