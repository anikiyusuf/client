import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import "../sass/Coleslaw.scss"
import { useState } from 'react'
export default function Coleslaw() {

const [coleState, setColeState] = useState("false")


function openColes(){
  setColeState(!coleState)
}
function closeColes(){
  setColeState(false)
}
  return (
    <div  className="coleslawPage">
      <NavBar/>  
<div className="coleslawSection">
<h1>RECIPES SALAD COLESLAW RECIPES</h1>

<p>For a slaw that looks similar to what you'd find at KFC, we suggest chopping the coleslaw mix before mixing with the dressing.</p>
<img src="Coleslaw-Recipes.jpg" alt="avatar"/>

<div className="coleTiming">
<div>
<h3>Prep Time:</h3>
<p>15 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>2 hrs</p>
</div>
<div>
<h3>Total Time:</h3>
<p>2 hrs 15 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>8</p>
</div>
<a href="#colesNutrition">Jump to Nutrition Facts</a>
</div>

<div className="colesIngredient">
<h2>Ingredients</h2>
<ul>
<li>1 (14 ounce) package coleslaw mix</li>

<li>¼ cup finely chopped yellow onion</li>

<li>½ cup mayonnaise</li>

<li>¼ cup sugar</li>

<li>2 tablespoons milk</li>

<li>2 tablespoons buttermilk</li>

<li>2 tablespoons white wine vinegar</li>

<li>½ teaspoon salt</li>

<li>⅛ teaspoon black pepper</li>
</ul>
</div>

<div className="colesDirection">
<h1>Directions</h1>
<h2>step 1</h2>
<p>Stir together coleslaw mix and onion in a large bowl.</p>
<h2>step 2</h2>
<p>Whisk together mayonnaise, sugar, milk, buttermilk, vinegar, salt, and pepper in a second bowl until smooth. Pour dressing over slaw; stir well and chill at least 2 hours or up to overnight.</p>
</div>

<div className="coleNutrition" id="colesNutrition">
<h1>Nutrition Facts</h1>
<p> (per serving)</p>
<div className="coleNutritionFact">
<div>
<h3>167</h3>
<p>Calories</p>
</div>
<div>
<h3>12g</h3>
<p>Fat</p>
</div>
<div>
<h3>14g</h3>
<p>Carbs</p>
</div>
<div>
<h3>1g</h3>
<p>Protein</p>
</div>
</div>
</div>
<div className="coleslawLabel">
<div onClick={openColes}>{coleState?(<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeColes} className="closeCole">{coleState?"":(
  <div className="coleslawLabelItem">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe 8</p>
<div className="gradientLine"></div>
<p>Calories 167</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 12g	16%</p>
<div className="gradientLine"></div>
<p>Saturated Fat 2g	10%</p>
<div className="gradientLine"></div>
<p>Cholesterol 10mg	3%</p>
<div className="gradientLine"></div>
<p>Sodium 217mg	9%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate 14g	5%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber 1g	3%</p>
<div className="gradientLine"></div>
<p>Protein 1g</p>
<div className="gradientLine"></div>
<p>Potassium 111mg	2%</p>
<div className="gradientLine"></div>
<p>* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>

<p>** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.</p>

<p>(-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.</p>
</div>
)}</div>
</div>

 </div>
 <Footer/>
</div>
  )
}
