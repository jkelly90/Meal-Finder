const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');


// Search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();


}

// Event listeners
submit.addEventListener('submit', searchMeal);