const mealList = document.getElementById('foodIteam');
const detailsShow = document.getElementById('showDetail');

// searchFood Iteam
const foodIteam = () => {
    const searchInput = document.getElementById('searchIteam').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then((res) => res.json())
        .then((data) => {
            const foods = data.meals;
            let htmlTemplate = '';

            if (foods) {
                foods.forEach((x) => {
                    htmlTemplate += `

                <div onclick="foodDetails('${x.idMeal}')"  class="food-wrapper">
                 
               <img  src="${x.strMealThumb}" alt="food image">
               <h3>${x.strMeal}</h3>
                  
                </div>               
               `;
                });
                mealList.classList.remove('notFound');
            } else {
                htmlTemplate = "Sorry, we didn't get any food!";
                mealList.classList.add('notFound');
                detailsShow.innerHTML = '';
            }
            mealList.innerHTML = htmlTemplate;
        });
};


// click event and show food deatils

const foodDetails = (detailById) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailById}`)
        .then((res) => res.json())
        .then((data) => {
            const details = data.meals;

            let htmlTemplateForDetails = '';
            details.forEach((x) => {
                htmlTemplateForDetails = `
              <div class="foodDetailsContainer">
               <img  src="${x.strMealThumb}" alt="food image">
                 <h2>${x.strMeal}</h2>
                  <h3>  Ingredien :</h3>
                
                <p><span>${x.strMeasure1}</span> <span>${x.strIngredient1}</span> </p>
                <p><span ${x.strMeasure2}</span> <span>${x.strIngredient2}</span> </p>
                <p><span>${x.strMeasure3}</span> <span>${x.strIngredient3}</span> </p>
                <p><span>${x.strMeasure4}</span> <span>${x.strIngredient4}</span> </p>
                <p><span>${x.strMeasure5}</span> <span>${x.strIngredient5}</span> </p>
                <p><span>${x.strMeasure6}</span> <span>${x.strIngredient6}</span> </p>
                <p><span>${x.strMeasure7}</span> <span>${x.strIngredient7}</span> </p>
                <p><span>${x.strMeasure8}</span> <span>${x.strIngredient8}</span> </p>
                <p><span>${x.strMeasure9}</span> <span>${x.strIngredient9}</span> </p>
                <p><span>${x.strMeasure10}</span> <span>${x.strIngredient10}</span> </p>
                <p><span>${x.strMeasure11}</span> <span>${x.strIngredient11}</span> </p>
                
              </div>
               

                `;
            });

            detailsShow.innerHTML = htmlTemplateForDetails;
        });
};