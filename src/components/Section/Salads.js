import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import {useState} from "react"
import "../sass/Salad.scss"

export default function Salads() {
const [saladState , setSaladState] = useState("false")

function openSalad(){
  setSaladState(!saladState)
}
function closeSalad(){
  setSaladState(false)
}
  return (
    <div className="SaladPage"> 
    <NavBar/>
    <div className="SaladSection">
 <h1>Hearts of Palm and Avocado Salad</h1>
<p>This salad with hearts of palm and avocado is delicious served over lettuce, inside lettuce cups, or alongside tortilla chips as a dip.</p>
<p>By Nicole McLaughlin  Published on February 15, 2023</p>
<img src="salad.jpg" alt=""/>

<div className="SaladTiming">
<div>
<h3>Prep Time:</h3>
<p>15 mins</p>
</div>
<div>
<h3>Total Time:</h3>
<p>15 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>4</p>
</div>
<div>
<h3>Yield:</h3>
<p>4 cups</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>

<div className="saladIngredient">
<h2>Ingredients</h2>
<ul>
<li>2 (14 ounce) cans whole hearts of palm, drained</li>

<li>1 lime, juiced</li>

<li>1 ½ teaspoons red wine vinegar</li>

<li>¼ cup extra-virgin olive oil</li>

<li>½ teaspoon chili powder</li>

<li>¾ teaspoon kosher salt</li>

<li>½ cup thinly sliced sweet onion</li>

<li>½ cup chopped red bell pepper</li>

<li>½ cup matchstick-cut radishes</li>

<li>⅓ cup matchstick-cut carrots</li>

<li>¼ cup chopped tomato</li>

<li>1 serrano chile pepper, seeded and minced</li>

<li>¼ cup chopped fresh cilantro</li>

<li>1 avocado, diced</li>
</ul>
</div>

<div className="saladDirection">
<h2>Directions</h2>
<h2>step 1</h2>
<p>Peel the hearts of palm into strips lengthwise and cut the pile of strips in half. Set aside.</p>

<h2>step 2</h2>
<p>Combine lime juice and vinegar in a small bowl and whisk in olive oil to combine. Season with chili powder and salt and set aside.</p>

<h2>step 3</h2>
<p>Combine onion, bell pepper, radish, carrots, tomato, serrano, cilantro, and reserved vinaigrette in a medium bowl; stir to combine. Gently fold in avocado and hearts of palm. Serve immediately.</p>

<h2>step 4</h2>
<p>salad with hearts of palm and avocado on lettuce</p>
</div>

<div className="saladNutrition">
<h1>Nutrition Facts</h1>
 <p>(per serving)</p>
 <div className="saladNutritionFact">
 <div>
<h3>282</h3>
<p>Calories</p>
</div>
<div>
<h3>22g</h3>
<p>Fat</p>
</div>
<div>
<h3>20g</h3>
<p>Carbs</p>
</div>
<div>
<h3>7g</h3>
<p>Protein</p>
</div>
</div>
</div>
<div className="saladFactLabel">
<div onClick={openSalad}>{saladState ? (<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeSalad}>{saladState ?"" :(<div className="saladLabel">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe 4</p>
<div className="gradientLine"></div>
<p>Calories 282</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 22g	29%</p>
<div className="gradientLine"></div>
<p>Saturated Fat 3g	16%</p>
<div className="gradientLine"></div>
<p>Sodium 1226mg	53%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate 20g	7%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber 10g	36%</p>
<div className="gradientLine"></div>
<p>Protein 7g</p>
<div className="gradientLine"></div>
<p>Potassium 770mg	16%</p>
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
