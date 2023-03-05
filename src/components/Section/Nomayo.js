import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import { useState } from 'react'
import "../sass/Nomayo.scss"

export default function Nomayo() {
  const [ nomayoState , setNomayoState] = useState("false")
  function openMayo(){
    setNomayoState(!nomayoState)
  }
  function closeMayo(){
    setNomayoState(false)
  }

  return (
    <div className="NomayoPage">
    <NavBar/>
    <div className="NomayoSection">
        <h1>Hot German Potato Salad</h1>
<p>This hot German potato salad with bacon and onions is a delicious variation of traditional potato salad.</p>
<img src="NO-MAYO.jpg" alt=""/>
<div className="NomayoTiming">
<div>
<h3>Prep Time:</h3>
<p>10 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>50 mins</p>
</div>
<div>
<h3>Total Time:</h3>
<p>1 hrs</p>
</div>
<div>
<h3>Servings:</h3>
<p>12</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>

<div className="NomayoIngredient">
<h2>Ingredients</h2>
<ul>
<li>9 potatoes, peeled</li>

<li>6 slices bacon</li>

<li>¾ cup chopped onions</li>

<li>2 tablespoons all-purpose flour</li>

<li>2 tablespoons white sugar</li>

<li>2 teaspoons salt</li>

<li>½ teaspoon celery seed</li>

<li>⅛ teaspoon ground black pepper</li>

<li>¾ cup water</li>

<li>⅓ cup distilled white vinegar</li>
</ul>
</div>



<div className="NomayoDirection">
<h2>Directions</h2>
<h2>step 1</h2>
<p>Place potatoes in a large pot and cover with salted water; bring to a boil. Reduce heat to medium-low and simmer until tender, about 20 minutes. Drain, cool, and slice thin.</p>
<h2>step 2</h2>
<p>Place bacon in a large, deep skillet. Cook over medium-high heat until evenly brown. Drain, crumble, and set aside, reserving drippings.</p>
<h2>step 3</h2>
<p>Sauté onions in bacon drippings over medium heat until they are golden brown.</p>
<h2>step 4</h2>
<p>Whisk flour, sugar, salt, celery seed, and pepper together in a small bowl; stir into onions and cook until bubbling, then remove from heat. Stir in water and vinegar; bring to a boil over medium heat, stirring constantly, and simmer for one minute. Gently stir bacon and sliced potatoes into the onion mixture until potatoes are heated through.</p>
<h2>step 5</h2>
<p>close up view of Hot German Potato Salad in a white bowl</p>
</div>


<div className="NomayoNutrition">
<h1>Nutrition Facts</h1> 
<p>(per serving)</p>
<div className="NomayoFact">
<div>
<h3>205</h3>
<p>Calories</p>
</div>
<div>
<h3>7g</h3>
<p>Fat</p>
</div>
<div>
<h3>33g</h3>
<p>Carbs</p>
</div>
<div>
<h3>4g</h3>
<p>Protein</p>
</div>
</div>
</div>



<div className="NomayoNutritionFact">
<div onClick={openMayo}>{nomayoState?(<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeMayo}>{nomayoState?"":(<div className="NomayoLabel">

<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe 12</p>
<div className="gradientLine"></div>
<p>Calories 205</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 7g	8%</p>
<div className="gradientLine"></div>
<p>Saturated Fat 2g	11%</p>
<div className="gradientLine"></div>
<p>Cholesterol 10mg	3%</p>
<div className="gradientLine"></div>
<p>Sodium 512mg	22%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate 33g	12%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber 3g	10%</p>
<div className="gradientLine"></div>
<p>Total Sugars 4g</p>
<div className="gradientLine"></div>
<p>Protein 4g</p>
<div className="gradientLine"></div>
<p>Vitamin C 11mg	57%</p>
<div className="gradientLine"></div>
<p>Calcium 17mg	1%</p>
<div className="gradientLine"></div>
<p>Iron 1mg	3%</p>
<div className="gradientLine"></div>
<p>Potassium 518mg	11%</p>
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
