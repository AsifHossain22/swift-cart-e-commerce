// SetCurrentYear
document.getElementById("year").textContent = new Date().getFullYear();

// LoadProductCategoryLevels
const loadProductCategoryLevels = () => {
  const url = "https://fakestoreapi.com/products/categories";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductCategoryLevels(data));
};

// DisplayProductCategoryLevels
const displayProductCategoryLevels = (categories) => {
  //   console.log(categories); // DisplayedCategoriesSuccessfully

  // GetProductCategoryLevelsContainer
  const productCategoryLevelsContainer = document.getElementById(
    "productCategoryLevelContainer",
  );

  // ClearPreviousCategories
  productCategoryLevelsContainer.innerHTML = "";

  // CapitalizeCategoryName'sFirstLetter
  const capitalizedCategoryName = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // GetProductCategoryLevels
  categories.map((category) => {
    // CreateProductCategoryLevel
    const productCategoryLevel = document.createElement("div");

    // SetProductCategoryLevel
    productCategoryLevel.innerHTML = `
    <button class="bg-transparent hover:bg-primary border-2 border-primary text-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer"
    >
        ${capitalizedCategoryName(category)} 
    </button>
    `;

    // AppendProductCategoryLevelToContainer
    productCategoryLevelsContainer.append(productCategoryLevel);
  });
};

// LoadProductCategoryLevelsOnPageLoad
loadProductCategoryLevels();
