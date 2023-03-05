import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import { useState } from 'react'
import "../sass/Fish.scss"

export default function Fish() {
  const [fishState , setFishState] = useState("false")

  function openFish(){
      setFishState(!fishState)
  }
  function closeFish(){
    setFishState(false)
  }
  return (
    <div className="FishPage">
    <NavBar/>
    <div className="fishSection">
     <h1>Aunt Carol's Spinach and Fish Bake</h1>
<p>Simple, easy fish recipe. Any white fish will do! And even the kids will eat up the spinach! (My four year old loves this dish!) This recipe was passed on by my Aunt and was a little bit of this, a little bit of that - so tweak the ingredients to your liking!</p>
<img src="Fish-air.jpg" alt="avatar"/>

<div className="fishTime">
<div>
<h3>Prep Time:</h3>
<p>15 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>20 mins</p>
</div>
<div>
<h3>Total Time:</h3>
<p>35 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>4</p>
</div>
<div>
<h3>Yield:</h3>
<p>4 servings</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>


<div className="fishIngredient">
<h2>Ingredients</h2>
<ul>
<li>1 (10 ounce) package frozen chopped spinach, thawed and squeezed dry</li>

<li>1 cup sharp Cheddar cheese</li>

<li>⅓ cup dry bread crumbs</li>

<li>1 egg, beaten</li>

<li>1 pound cod fillets</li>

<li>salt and pepper to taste</li>
</ul>
</div>

<div className="fishDirection">
<h2>Directions</h2>
<h2>step 1</h2>
<p>Preheat oven to 325 degrees F (165 degrees C).</p>
<h2>step 2</h2>
<p>In a bowl, mix the spinach, 1/2 cup Cheddar cheese, about 5 tablespoons dry bread crumbs, and the egg. Spread the mixture into the bottom of a small baking dish. Arrange the cod fillets on top of the spinach mixture, and season with salt and pepper. Top with the remaining Cheddar cheese and bread crumbs.</p>

<h2>step 3</h2>
<p>Cover, and bake 20 minutes in the preheated oven, or until fish flakes easily with a fork.</p>
</div>


<div className="fishNutrition">
<h1>Nutrition Facts</h1> 
<p>(per serving)</p>
<div className="fishFact">
<div>
<h3>306</h3>
<p>Calories</p>
</div>
<div>
<h3>14g</h3>
<p>Fat</p>
</div>
<div>
<h3>10g</h3>
<p>Carbs</p>
</div>
<div>
<h3>34g</h3>
<p>Protein</p>
</div>
</div>
</div>

<div className="FishNutritionLabel">
<div onClick={openFish}>{fishState?(<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeFish}>{fishState?"":(<div className="fishLabel">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe 4</p>
<div className="gradientLine"></div>
<p>Calories 306</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 14g	18%</p>
<div className="gradientLine"></div>
<p>Saturated Fat 8g	40%</p>
<div className="gradientLine"></div>
<p>Cholesterol 132mg	44%</p>
<div className="gradientLine"></div>
<p>Sodium 419mg	18%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate 10g	4%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber 3g	9%</p>
<div className="gradientLine"></div>
<p>Total Sugars 1g</p>
<div className="gradientLine"></div>
<p>Protein 34g</p>
<div className="gradientLine"></div>
<p>Vitamin C 5mg	24%</p>
<div className="gradientLine"></div>
<p>Calcium 376mg	29%</p>
<div className="gradientLine"></div>
<p>Iron 3mg	15%</p>
<div className="gradientLine"></div>
<p>Potassium 530mg	11%</p>
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
