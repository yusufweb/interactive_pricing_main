// simple , traffic base pricing app
// price criteria
// 1. 10k pageview / $8 per month
// 2. 50K pageviews / $12 per month
// 3. 100K pageviews / $16 per month
// 4. 500k pageviews / $24 per month
// 5. 1M pageviews / $36 per month

// discount of 25% on yearly billing

let sliderInput = document.querySelector(".price-range");
let discount = document.querySelector("#discount");

let priceRange = {
    1: {
        "pageview": "10k Pageviews",
        "price": "8"
    },

    2: {
        "pageview": "50k Pageviews",
        "price": "12"
    },

    3: {
        "pageview": "100k Pageviews",
        "price": "16"
    },

    4: {
        "pageview": "500k Pageviews",
        "price": "24"
    },

    5: {
        "pageview": "1M Pageviews",
        "price": "36"
    }
};


manipulatePrice = (value) => {
    let mainPrice = priceRange[value];
    let pagePrice = discount.checked ? mainPrice.price - (mainPrice.price * 0.25) : mainPrice.price;
    document.querySelector(".viewpages").textContent = mainPrice.pageview;
    document.querySelector(".price").textContent = `$${pagePrice}.00`;
    console.log(mainPrice);
}

// run the manipulate function when slider input change
sliderInput.addEventListener("input", () => {
    manipulatePrice(sliderInput.value);
});

// run manipulate function when toggler is clicked
discount.addEventListener("click", () => {
    manipulatePrice(sliderInput.value);
})

// default 
// 100K pageviews / $16 per month
manipulatePrice(sliderInput.value);