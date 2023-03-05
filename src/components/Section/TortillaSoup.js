import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import { useState } from "react"
import "../sass/Tortiila.scss"

export default function TortillaSoup() {

  const [soupState ,setSoupState] = useState("false")
  function openSoup(){
     setSoupState(!soupState)
  }

  function closeSoup(){
    setSoupState(false)
  }

  return (
    <div className='tortillaPage'>
   <NavBar/>
  <div className="tortillaSection">
<h1>TORTILLA SOUP RECIPES</h1>
<p>Dump-and-Go Instant Pot Tortilla Soup</p>

<p>This is a super hands-off Instant Pot version of my favorite Allrecipes Six Can Tortilla Soup recipe. Feel free to customize the toppings with more of your favorite tortilla soup toppings, like diced avocado, sour cream, cilantro, diced red onion, etc. My rule of thumb with this soup is that if a topping is good on a taco, it's also good on top of this soup.</p>
<img src="Tortilla.jpg" alt=""/>

<div className="tortillaTime">
<div>
<h3>Prep Time:</h3>
<p>5 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>20 mins</p>
</div>
<div>
<h3>Release Pressure Time:</h3>
<p>5 mins</p>
</div>
<div>
<h3>Total Time:</h3>
<p>30 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>4</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>

<div className="tortillaIngredient">
<h2>Ingredients</h2>
<ul>
<li>2 (14.5 ounce) cans chicken broth</li>

<li>1 (15 ounce) can whole kernel corn, drained</li>

<li>1 (15 ounce) can black beans, rinsed and drained</li>

<li>2 (5 ounce) cans chicken breast chunks, drained</li>

<li>1 (10 ounce) can diced tomatoes with green chile peppers (such as RO*TEL®)</li>

<li>½ teaspoon chili powder</li>

<li>½ teaspoon seasoning salt</li>

<li>½ teaspoon garlic powder</li>

<li>1 (3.5 ounce) package tortilla strips, for garnish</li>

<li>2 tablespoons shredded Mexican cheese blend, or to taste</li>
</ul>
</div>

<div className="tortillaDirection">
<h2>Directions</h2>
<h2>step 1</h2>
<p>Pour chicken broth, corn, black beans, chunk chicken, tomatoes with green chilies (with their juices), chili powder, seasoning salt, and garlic powder together in a multi-functional pressure cooker (such as Instant Pot®); stir to combine.</p>
<h2>step 2</h2>
<p>Close and lock the lid. Select high pressure according to manufacturer's instructions; set timer for 5 minutes. Allow 10 to 15 minutes for pressure to build.</p>
<h2>step 3</h2>
<p>Release pressure carefully using the quick-release method according to manufacturer's instructions, about 5 minutes. Unlock and carefully open the lid.</p>
<h2>step 4</h2>
<p>Ladle the soup into serving bowls and top with tortilla strips, and shredded cheese, to taste.</p>
</div>

<div className="tortillaNutrition">
<h1>Nutrition Facts</h1>
 <p>(per serving)</p>
 <div className="tortillaItems">
 <div>
<h3>297</h3>
<p>Calories</p>
</div>
<div>
<h2>16g</h2>
<p>Fat</p>
</div>
<div>
<h2>8g</h2>
<p>Carbs</p>
</div>
<div>
<h2>24g</h2>
<p>Protein</p>
</div>
</div>
</div>

<div className="tortillaNutritionFact">
<div onClick={openSoup}>{soupState ? (<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeSoup}>{soupState ?"":( <div className="tortillaFact">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe: 4</p>
<div className="gradientLine"></div>
<p>Calories: 297</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 16g	20%</p>
<div className="gradientLine"></div>
<p>Saturated Fat ::3g	13%</p>
<div className="gradientLine"></div>
<p>Cholesterol: 52mg	17%</p>
<div className="gradientLine"></div>
<p>Sodium :2198mg	96%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate: 48g	18%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber :7g	25%</p>
<div className="gradientLine"></div>
<p>Protein: 24g</p>
<div className="gradientLine"></div>
<p>Potassium :514mg	11%</p>
<div className="gradientLine"></div>
<p>* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>

<p>** Nutrient information is not available for all ingredients. Amount is based on available nutrient data.</p>

(-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.

</div>)
 }</div>
</div>

</div>
<Footer/>
    </div>
  )
}
