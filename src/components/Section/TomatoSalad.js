import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import { useState } from "react"
import "../sass/TomatoSalad.scss"

export default function TomatoSalad() {
const [tomatoState , setTomatoState] = useState("false")
  
function openTomato(){
    setTomatoState(!tomatoState)
  } 
  function closeTomato(){
    setTomatoState(false)
  }

return (
    <div  className="tomatoPage">
       <NavBar/>
    <div className="tomatoSection">
        <h1>Pasta Salad</h1>
<p>This pasta salad recipe was given to me by a dear friend many years ago, and I've been making it ever since! It's great for barbecues.</p>
<p>Bright, red cherry tomatoes, salty black olives, vinaigrette of your choice, and beautiful green and yellow bell peppers are like confetti in this pasta salad side dish. Enjoy with burgers, in an array of summer eats at your next barbeque!</p>
<img src="Tomatopasta.jpg"  alt=""/>

<div className="tomatoTiming">
<div>
<h3>Prep Time:</h3>
<p>20 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>10 mins</p>
</div>
<div>
<h3>Additional Time:</h3>
<p>8 hrs</p>
</div>
<div>
<h3>Total Time:</h3>
<p>8 hrs 30 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>6</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>

<div className="tomatoIngredient">
<h2>Ingredients</h2>
<ul>
<li>1 pound tri-colored spiral pasta</li>

<li>1 (16 ounce) bottle Italian-style salad dressing</li>

<li>6 tablespoons salad seasoning mix</li>

<li>2 cups cherry tomatoes, diced</li>

<li>1 green bell pepper, chopped</li>

<li>1 red bell pepper, diced</li>

<li>½ yellow bell pepper, chopped</li>

<li>1 (2.25 ounce) can black olives, chopped</li>
</ul>
</div>


<div className="tomatoDirection">
<h2>Directions</h2>
<p>Gather all ingredients.</p>

<h2>step 1</h2>
<p>Bring a large pot of lightly salted water to a boil. Cook pasta in the boiling water, stirring occasionally, until tender yet firm to the bite, about 10 to 12 minutes; rinse under cold water and drain.</p>

<h2>step 2</h2>
<p>Whisk Italian dressing and salad spice mix together until smooth. Combine pasta, tomatoes, bell peppers, and olives in a salad bowl.</p>

<h2>step 3</h2>
<p>All ingredients and cooked pasta into a bowl.</p>

<h2>step 4</h2>
<p>Pour dressing over salad and toss to coat. </p>

<h2>step 5</h2>
<p>Refrigerate salad, 8 hours to overnight.</p>
</div>

<div className="tomatoNutrition">
<h1>Nutrition Facts</h1>
<p> (per serving)</p>
<div className="tomatoNutritionFact">
<div>
<h3>400</h3>
<p>Calories</p>
</div>
<div>
<h3>25g</h3>
<p>Fat</p>
</div>
<div>
<h3>39g</h3>
<p>Carbs</p>
</div>
<div>
<h3>8g</h3>
<p>Protein</p>
</div>
</div>
</div>

<div className="tomatoLabel">
<div onClick={openTomato}>{tomatoState?(<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeTomato}>{tomatoState?"":(<div className="tomatoLabelItem">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe :6</p>
<div className="gradientLine"></div>
<p>Calories: 400</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat: 25g	32%</p>
<div className="gradientLine"></div>
<p>Saturated Fat: 4g	22%</p>
<div className="gradientLine"></div>
<p>Cholesterol :3mg	1%</p>
<div className="gradientLine"></div>
<p>Sodium :1904mg	83%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate: 39g	14%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber: 4g	13%</p>
<div className="gradientLine"></div>
<p>Total Sugars: 8g</p>
<div className="gradientLine"></div>
<p>Protein :8g</p>
<div className="gradientLine"></div>
<p>Vitamin C: 79mg	397%</p>
<div className="gradientLine"></div>
<p>Calcium: 54mg	4%</p>
<div className="gradientLine"></div>
<p>Iron: 3mg	14%</p>
<div className="gradientLine"></div>
<p>Potassium :298mg	6%</p>
<div className="gradientLine"></div>
<p>* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>

<p>** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.</p>

<p>(-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.</p>
</div>)}</div>
   </div>
   </div>
   <Footer/>
    </div>
  )
}
