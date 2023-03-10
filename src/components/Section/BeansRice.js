import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import { useState } from "react"
import "../sass/BeansRice.scss"

export default function BeansRice() {
    const [beansState , setBeansState] = useState("false")
    function openBeans(){
      setBeansState(!beansState)
    }
    function closeBeans(){
      setBeansState(false)
    }
    return (
    <div className="BeansRicePage" id="beansRice">
    <NavBar/>
    <div className="BeansRiceSection">
      <h1>Authentic Louisiana Red Beans and Rice</h1>

<p>Authentic Cajun flavor! I grew up in Louisiana and love red beans and rice; these are just like I remember. Serve with hot sauce for a little kick. My family loved to splash a little cider vinegar in each bowl.</p>

<p>How to Make Authentic Louisiana Red Beans and Rice. Louisiana red beans and rice brings authentic Cajun flavor to the table. Serve it with hot sauce, or splash in a little cider vinegar.</p>
   <img src="Beans-Rice.jpg" alt="" />
<div className="beansTiming">
<div>
<h3>Prep Time:</h3>
<p>25 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>3 hrs 5 mins</p>
</div>
<div>
<h3>Additional Time:</h3>
<p>8 hrs</p>
</div>
<div>
<h3>Total Time:</h3>
<p>11 hrs 30 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>8</p>
</div>
<div>
<h3>Yield:</h3>
<p>8 servings</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>
{/* JUMP TO RECIPE
Looking for a hearty rice dish with a kick? This authentic Louisiana red beans and rice is a budget-friendly recipe with incredible Cajun flavor. Andouille sausage joins garden-fresh vegetables, zesty spices, and long grain rice in this deliciously down-home recipe. Learn all about this boldly savory dish, including tips on choosing the best beans and what to serve alongside it. */}

{/* <div className="beansDirection">
How to Make Red Beans and Rice
This multifaceted Louisiana-style red beans and rice recipe is made easier by breaking down the prep into small steps. You'll find the full, step-by-step recipe below — but here's a brief overview of what you can expect:

Start by soaking your beans overnight, and dicing any vegetables beforehand.

When you're ready to begin, transfer the soaked beans to a large pot with water. Then, saute onions, bell peppers, garlic, and celery in an oiled skillet until a bit of color appears. Add the cooked vegetables, bay leaves, Cajun seasoning, and other spices to the beans.

Bring the bean mixture to a boil before reducing the heat and allowing the ingredients to simmer for two to two and a half hours. Steam the rice during this time and set it aside. Add Andouille sausage to the beans and cook for an additional half-hour. After cooking, pour the spicy sausage and beans over rice, and enjoy a piping hot bowl of tender, meaty, and flavorful perfection.

Red Beans vs. Kidney Beans
Red beans and kidney beans share a similar color, but they're actually two different types of legumes. Red beans are small, rounded, and have a faintly nutty taste. Red kidney beans are larger in size, with thicker skin and a slightly richer hue.

Both can be used to make an appetizing red beans and rice dish, but dried kidney beans may have to soak longer before cooking. Using dry beans in this recipe ensures that they retain their shape during cooking.

How to Soak Beans
Dried beans should be soaked prior to cooking for easier digestion and faster cook time. There are two commonly used ways to soak beans: overnight or quick soak. The overnight method is incredibly simple — add beans to a large stockpot and cover them with twice their volume in water. Cover and let sit overnight.

Quick soaking consists of bringing dried beans and water to a boil before removing them from heat and allowing the beans to sit for one to four hours (or until they're easily squeezed).

What to Serve With Red Beans and Rice
Red beans and rice is a versatile recipe that can act as a main or side dish. The big, hearty flavors pair well with foods like cornbread, collard greens, barbecued meats, and fried chicken.

How to Store Leftover Red Beans and Rice
Leftover red beans should be stored separately from rice to discourage mushiness. Place both components in their own sealed container and refrigerate for up to a week.

To freeze your leftovers, place cooled, single servings of rice into freezer bags and top with a commensurate portion of beans. Tightly seal the bags, and freeze for up to three months.

Allrecipes Community Tips and Praise
"I'm a Louisiana boy who grew up eating red beans and rice, shares reviewer jChase. "This recipe is the real deal. It's become a staple in my home and I serve it up twice a month."

"I made substitutions because I did not want to venture out to the market for ingredients I did not have," says home cook Rea. "This time, I used chorizo sausage, celery powder, and green pepper from my garden. I recommend it as-is, or with personal adjustments!"

"All I can say is wow!" raves Lesley. "I served half that night for dinner (over white jasmine rice) and the rest I froze in individual servings for a later date. A 5-star recipe for sure!"

</div> */}

<div className="beansIngredient">
<h2>Ingredients</h2>
<ul>
<li>1 pound dry kidney beans</li>

<li>¼ cup olive oil</li>

<li>1 large onion, chopped</li>

<li>1 green bell pepper, chopped</li>

<li>2 stalks celery, chopped</li>

<li>2 tablespoons minced garlic</li>

<li>6 cups water</li>

<li>2 bay leaves</li>

<li>1 tablespoon dried parsley</li>

<li>1 teaspoon dried thyme</li>

<li>1 teaspoon Cajun seasoning</li>

<li>½ teaspoon cayenne pepper</li>

<li>¼ teaspoon dried sage</li>

<li>1 pound andouille sausage, sliced</li>

<li>4 cups water</li>

<li>2 cups long grain white rice</li>
</ul>
</div>

<div className="beansDirection">
<h2>Directions</h2>
<p>Gather all ingredients.</p>
<h2>step 1</h2>
<p>A top down view of ingredients measured and prepped for authentic red beans and rice.</p>
<h2>step 2</h2>
<p>Rinse beans, and then soak in a large pot of water overnight.</p>


<h2>step 3</h2>
<p>Heat oil in a skillet over medium heat. Cook onion, bell pepper, celery, and garlic in olive oil for 3 to 4 minutes.</p>

<h2>step 4</h2>
<p>onions, celery, green pepper, and garlic cooking in olive oil.onion, bell pepper, celery, and garlic cooked for 3 to 4 minutes.</p>

<h2>step 5</h2>
<p>Rinse beans, and transfer to a large pot with 6 cups water. Stir cooked vegetables into beans. Season with bay leaves, parsley, thyme, Cajun seasoning, cayenne pepper, and sage. Bring to a boil, and then reduce heat to medium-low. Simmer for 2 1/2 hours.beans covered in water in a green dutch oven.</p>

<h2>step 6</h2>
<p>sautéed veggies being added to a pot of beansbeans and veggies seasoned with a variety of herbs and spices.Stir sausage into beans, and continue to simmer for 30 minutes.sausage stirred into a pot of beans</p>

<h2>step 7</h2>
<p>Meanwhile, prepare the rice. Bring water and rice to a boil in a saucepan. Reduce heat, cover, and simmer for 20 minutes. Serve beans over steamed white rice.</p>
</div>

<div className="beansNutrition">
<h1>Nutrition Facts</h1> 
<p>(per serving)</p>
<div className="beansNutritionItems">
<div>
<h3>630</h3>
<p>Calories</p>
</div>
<div>
<h3>24g</h3>
<p>Fat</p>
</div>
<div>
<h3>79g</h3>
<p>Carbs</p>
</div>
<div>
<h3>24g</h3>
<p>Protein</p>
</div>
</div>
</div>

<div className="beansNutritionFact">
<div onClick={openBeans}>{beansState? (<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeBeans}>{beansState ?"" :(
  <div className="beansFact">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe :8</p>
<div className="gradientLine"></div>
<p>Calories: 630</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat: 24g	31%</p>
<div className="gradientLine"></div>
<p>Saturated Fat: 7g	34%</p>
<div className="gradientLine"></div>
<p>Cholesterol: 33mg	11%</p>
<div className="gradientLine"></div>
<p>Sodium: 604mg	26%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate: 79g	29%</p>
<p>Dietary Fiber 10g	36%</p>
<div className="gradientLine"></div>
<p>Total Sugars: 3g</p>
<div className="gradientLine"></div>
<p>Protein: 24g</p>
<div className="gradientLine"></div>
<p>Vitamin C: 17mg	87%</p>
<div className="gradientLine"></div>
<p>Calcium :97mg	7%</p>
<div className="gradientLine"></div>
<p>Iron: 7mg	36%</p>
<div className="gradientLine"></div>
<p>Potassium: 1027mg	22%</p>
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
