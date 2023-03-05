import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import { useState} from "react"
import "../sass/Gumbo.scss"

export default function Gumbo() {
  const [gumboState , setGumboState] = useState("false")
   
  function openGumbo(){
    setGumboState(!gumboState)
  }
    function closeGumbo(){
      setGumboState(false)
    }
  return (
    <div className="gumboPage">
    <NavBar/>
    <div className="gumboSection">
       <h1> Good New Orleans Creole Gumbo</h1>

<p>I am going to give you my Creole gumbo recipe. I learned to cook from my mother and grandmother who were born and raised in New Orleans and really knew how to cook. Most of the time, you could not get them to write down their recipes because they used a 'pinch' of this and 'just enough of that' and 'two fingers of water,' and so on. This recipe is a combination of both of their recipes which I have added to over the years. Serve over hot cooked rice. The gumbo can be frozen or refrigerated and many people like it better the next day. Bon appetit!</p>
<img src="Gumbo.jpg" alt="avatar"/>                                         

<div className="gumboTiming">
<div>
<h3>Prep Time:</h3>
<p>1 hrs</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>2 hrs 40 mins</p>
</div>
<div>
<h3>Total Time:</h3>
<p>3 hrs 40 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>20</p>
</div>
<div>
<h3>Yield:</h3>
<p>20 servings</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>

<div className="gumboIngredient">
<h2>Ingredients</h2>
<ul>
<li>1 cup all-purpose flour</li>

<li>¾ cup bacon drippings</li>

<li>1 cup coarsely chopped celery</li>

<li>1 large onion, coarsely chopped</li>

<li>1 large green bell pepper, coarsely chopped</li>

<li>2 cloves garlic, minced</li>

<li>1 pound andouille sausage, sliced</li>

<li>3 quarts water</li>

<li>6 cubes beef bouillon</li>

<li>1 tablespoon white sugar</li>

<li>salt to taste</li>

<li>2 tablespoons hot pepper sauce (such as Tabasco®), or to taste</li>

<li>½ teaspoon Cajun seasoning blend (such as Tony Chachere's®), or to taste</li>

<li>4 bay leaves</li>

<li>½ teaspoon dried thyme leaves</li>

<li>1 (14.5 ounce) can stewed tomatoes</li>

<li>1 (6 ounce) can tomato sauce</li>

<li>4 teaspoons file powder, divided</li>

<li>2 tablespoons bacon drippings</li>

<li>2 (10 ounce) packages frozen cut okra, thawed</li>

<li>2 tablespoons distilled white vinegar</li>

<li>1 pound lump crabmeat</li>

<li>3 pounds uncooked medium shrimp, peeled and deveined</li>

<li>2 tablespoons Worcestershire sauce</li>
</ul>
</div>

<div className="gumboDirection">
<h2>Directions</h2>
<h2>step 1</h2>
<p>Make the roux: Whisk together flour and 3/4 cup bacon drippings in a large, heavy saucepan over medium-low heat until smooth. Cook roux, whisking constantly, until it turns a rich mahogany brown color. This can take 20 to 30 minutes; watch heat carefully and whisk constantly or roux will burn. Remove from heat; continue whisking until mixture stops cooking.</p>

<h2>step 2</h2>
<p>Make the gumbo: Place celery, onion, green bell pepper, and garlic into the work bowl of a food processor, and pulse until all vegetables are very finely chopped. Stir vegetables into the roux, and mix in sausage. Bring mixture to a simmer over medium-low heat, and cook until vegetables are tender, 10 to 15 minutes. Remove from heat and set aside.</p>
<h2>step 3</h2>
<p>Combine water and beef bouillon cubes in a large Dutch oven or soup pot and bring to a boil over medium-high heat. Stir until bouillon cubes dissolve, then whisk roux mixture into the boiling water.</p>
<h2>step 4</h2>
<p>Reduce heat to a simmer and mix in sugar, salt, hot pepper sauce, Cajun seasoning, bay leaves, thyme, stewed tomatoes, and tomato sauce. Simmer soup over low heat for 1 hour; mix in 2 teaspoons of file gumbo powder at the 45-minute mark.</p>

<h2>step 5</h2>
<p>Meanwhile, melt 2 tablespoons bacon drippings in a skillet over medium heat. Add okra and vinegar and cook for 15 minutes; remove okra with a slotted spoon, and stir into the simmering gumbo.</p>

<h2>step 6</h2>
<p>Mix in reserved vegetables, crabmeat, shrimp, and Worcestershire sauce, and simmer until flavors have blended, 45 more minutes. Stir in 2 more teaspoons of file gumbo powder just before serving.</p>
</div>

<div className="gumboNutrition">
<h2>Nutrition Facts</h2>
 <p>(per serving)</p>
 <div className="gumboNutritionFact">
 <div>
<h3>283</h3>
<p>Calories</p>
</div>
<div>
<h3>17g</h3>
<p>Fat</p>
</div>
<div>
<h3>12g</h3>
<p>Carbs</p>
</div>
<div>
<h3>21g</h3>
<p>Protein</p>
</div>
</div>
</div>


<div className="gumboNutritionLabel">
<div onClick={openGumbo}>{ gumboState? (<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeGumbo}>{gumboState ? "":(<div className="gumboLabel">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe 20</p>
<div className="gradientLine"></div>
<p>Calories 283</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 17g	21%</p>
<div className="gradientLine"></div>
<p>Saturated Fat 6g	30%</p>
<div className="gradientLine"></div>
<p>Cholesterol 143mg	48%</p>
<div className="gradientLine"></div>
<p>Sodium 853mg	37%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate 12g	4%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber 2g	6%</p>
<div className="gradientLine"></div>
<p>Total Sugars 3g</p>
<div className="gradientLine"></div>
<p>Protein 21g</p>
<div className="gradientLine"></div>
<p>Vitamin C 19mg	96%</p>
<div className="gradientLine"></div>
<p>Calcium 81mg	6%</p>
<div className="gradientLine"></div>
<p>Iron 3mg	17%</p>
<div className="gradientLine"></div>
<p>Potassium 428mg	9%</p>
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
