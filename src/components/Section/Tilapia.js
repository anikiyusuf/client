import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import { useState } from 'react'
import "../sass/Tilapia.scss"

export default function Tilapia() {
  const [tilapiaState , setTilapiaState]  = useState("false")

  function openTilapia(){
    setTilapiaState(!tilapiaState)
  }
  function closeTilapia(){
    setTilapiaState(false)
  }
    return (
    <div className="tilapiaPage">
    <NavBar/>
  <div className="tilapiaSection">  
<h1>FISH TILAPIA</h1>
<p>Pan-Seared Tilapia</p>

<p>Learn how to cook tilapia with this easy, 15-minute recipe for pan-seared tilapia that's delicious and full of flavor. This simple method of cooking fish fillets is great for a weeknight meal. Serve with fresh veggies.</p>
<p>Tilapia is one of the most popular types of fish in the United States because it's cheap, plentiful, and easy to cook. In this video, learn how to prepare this fish the right way with an easy, 15-minute recipe for pan-seared tilapia that's packed with flavor. This simple method of cooking fish filets works wonders for anyone trying to put together a hurried weeknight dinner. Serve it with fresh steamed vegetables to complete the meal.</p>
<img src="TILAPIA.jpg" alt=""/>


<div className="tilapiaTiming">
<div>
<h3>Prep Time:</h3>
<p>5 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>10 mins</p>
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
<p>4 fillets</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>

<div className="tilapiaIngredient">
<h1>Ingredients</h1>
<ul>
<li>4 (4 ounce) tilapia fillets</li>

<li>salt and ground black pepper to taste</li>

<li>½ cup all-purpose flour</li>

<li>1 tablespoon olive oil</li>

<li>2 tablespoons unsalted butter, melted</li>

<li>1 tablespoon lemon juice, or to taste (Optional)</li>

<li>1 teaspoon chopped fresh flat-leaf parsley, or to taste (Optional)</li>

<li>½ teaspoon chopped fresh thyme, or to taste (Optional)</li>
</ul>
</div>
<div className="tilapiaDirection">
<h2>Directions</h2>
<h2>step 1</h2>
<p>Rinse tilapia fillets in cold water and pat dry with paper towels. Season both sides of each fillet with salt and pepper.</p>

<h2>step 2</h2>
<p>Overhead shot of raw tilapia fillets on a plate next to salt and pepper
Place flour in a shallow dish. Gently press each fillet into the flour to coat and shake off any excess.</p>

<h2>step 3</h2>
<p>Overhead view of tilapia being coated in flour and placed on a baking dish
Heat olive oil in a large skillet over medium-high heat. Cook tilapia fillets in the hot oil, in batches if necessary, until fish flakes easily with a fork, about 4 minutes per side.</p>

<h2>step 4</h2>
<p>High angle shot of tilapia fillets cooking in a cast iron skillet
Brush melted butter onto the tilapia fillets in the last minute before removing from the skillet.</p>

<h2>step 5</h2>
<p>Drizzle fillets with lemon juice and garnish with parsley and thyme.</p>
</div>
<div className="tilapiaNutrition">
<h1>Nutrition Facts</h1> 
<p>(per serving)</p>
<div className="tilapiaItems">
<div>
<h3>249</h3>
<p>Calories</p>
</div>
<div>
<h3>11g</h3>
<p>Fat</p>
</div>
<div>
<h3>12g</h3>
<p>Carbs</p>
</div>
<div>
<h3>25g</h3>
<p>Protein</p>
</div>
</div>
</div>

<div className="tilapiaNutritionFact">
<div onClick={openTilapia}>{ tilapiaState? (<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeTilapia}>{tilapiaState?"":(<div className="tilapiaFact">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe 4</p>
<div className="gradientLine"></div>
<p>Calories 249</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 11g	14%</p>
<div className="gradientLine"></div>
<p>Saturated Fat 5g	23%</p>
<div className="gradientLine"></div>
<p>Cholesterol 56mg	19%</p>
<div className="gradientLine"></div>
<p>Sodium 51mg	2%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate 12g	4%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber 0g	1%</p>
<div className="gradientLine"></div>
<p>Protein 25g</p>
<div className="gradientLine"></div>
<p>Vitamin C 1mg	7%</p>
<div className="gradientLine"></div>
<p>Calcium 39mg	3%</p>
<div className="gradientLine"></div>
<p>Iron 1mg	6%</p>
<div className="gradientLine"></div>
<p>Potassium 474mg	10%</p>
<div className="gradientLine"></div>
<p>* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>

<p>** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.</p>

<p>(-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.</p>
</div>)}</div> </div>
</div>
    <Footer/>
    </div>
  )
}
