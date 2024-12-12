let recipes = [
    {
        name: 'Falafel',
        link: 'https://www.themediterraneandish.com/how-to-make-falafel/',
        image: 'images/falafel.jpg'
    },
    {
        name: 'Tabbouleh',
        link: 'https://www.themediterraneandish.com/tabouli-salad/',
        image: 'images/tabbouleh.jpg'
    }
];

document.querySelector('.search-bar button').addEventListener('click', searchRecipes);
window.onload = displayRecipes;

function displayRecipes() {
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.name;
        image.style.width = '100%';

        const title = document.createElement('h3');
        title.textContent = recipe.name;

        const button = document.createElement('button');
        button.textContent = 'View Recipe';
        button.onclick = () => window.open(recipe.link, '_blank');

        recipeCard.appendChild(image);
        recipeCard.appendChild(title);
        recipeCard.appendChild(button);

        recipeContainer.appendChild(recipeCard);
    });
}

function searchRecipes() {
    const query = document.querySelector('.search-bar input').value.trim().toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
    );

    if (filteredRecipes.length > 0) {
        recipes = filteredRecipes;
        displayRecipes();
    } else {
        alert('Recipe not found. You can add it!');
    }
}

function addRecipe() {
    const name = document.getElementById('recipe-name').value.trim();
    const link = document.getElementById('recipe-link').value.trim();
    const image = document.getElementById('recipe-image').value.trim();

    if (name && link && image) {
        recipes.push({ name, link, image });
        displayRecipes();
        document.getElementById('recipe-name').value = '';
        document.getElementById('recipe-link').value = '';
        document.getElementById('recipe-image').value = '';
    } else {
        alert('Please enter the recipe name, link, and image URL.');
    }
}
