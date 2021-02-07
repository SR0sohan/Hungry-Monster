function searchFunction(){
    document.getElementById('meal-list').innerHTML = '';
    document.getElementById('food-output').innerHTML = '';
    const keyword = document.getElementById('food-name').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(res => res.json())
    .then(data =>{
        const storedData = data;
        console.log(data);
        console.log(data.meals.length);
        const ul = document.getElementById('meal-list')

        if(data.meals == null){
            console.log("Array is empty");
        }
        
            for(let i=0; i<data.meals.length && i<8; i++){
                const title = data.meals[i].strMeal;
                const thumbNail = data.meals[i].strMealThumb;
                console.log(title,thumbNail);
    
                document.getElementById('meal-list').innerHTML += `
                            <div onclick="showDetails(${title})" class="card" style="width: 18rem;">
                                <img src="${thumbNail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text" style="color:black">${title}</p>
                                </div>
                            </div>
    
                `
            }        
        
    })
}




