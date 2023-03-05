import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import {useState} from "react"
import "../sass/Desserts.scss"

export default function DessertsCake() {
  const [dessertsState , setDessertsState] = useState("false")

  function openDesserts(){
   setDessertsState(!dessertsState)
  }

  function closeDesserts(){
    setDessertsState(false)
  }
  return (
    <div className="dessertsPage">
   <NavBar/>
   <div className="dessertsSection">
<h1>The Best Cream Cheese King Cake</h1>
<p>7 This cream cheese king cake is easy to make for celebrating Mardi Gras. If you're looking for a new king cake recipe, you must try this one. Don't forget to put the baby in!</p>
<p>A delicious take on the Mardi Gras classic.T his cake takes it to the next level with a decadent praline-cream cheese filling. Don't forget to add the baby!</p>
<img src="Desserts-cream.jpg" alt=""/>
<div className="dessertsTiming">
<div>
<h3>Prep Time:</h3>
<p>30 mins</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>30 mins</p>
</div>
<div>
<h3>Additional Time:</h3>
<p>3 hrs 15 mins</p>
</div>
<div>
<h3>Total Time:</h3>
<p>4 hrs 15 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>20</p>
</div>
<div>
<h3>Yield:</h3>
<p>2 king cakes</p>
</div>
<a href="/">Jump to Nutrition Facts</a>
</div>


<div className="dessertsIngredient">
<h2>Ingredients</h2>

<h3>Dough:</h3>
<ul>
<li> 1 (16 ounce) container sour cream</li>

<li>⅓ cup white sugar</li>

<li>¼ cup butter</li>

<li>1 teaspoon salt</li>

<li>½ cup warm water (100 to 110 degrees F)</li>

<li>2 (.25 ounce) packages active dry yeast</li>

<li>1 tablespoon white sugar</li>

<li>2 large eggs, lightly beaten</li>

<li>6 ¾ cups bread flour, divided</li>
</ul>

 <h3>Praline-Cream Cheese Filling:</h3>
<ul>
<li>2 (8 ounce) packages cream cheese, softened</li>

<li>½ cup white sugar</li>

<li>¼ cup packed dark brown sugar</li>

<li>2 teaspoons ground cinnamon</li>

<li>2 teaspoons vanilla extract</li>

<li>1 large egg</li>

<li>1 cup finely chopped pecans, toasted, divided</li>
</ul>

<h3>Creamy Vanilla Glaze:</h3>
<ul>

<li>3 cups confectioners' sugar</li>

<li>3 tablespoons butter, melted</li>

<li>2 teaspoons vanilla extract</li>

<li>3 tablespoons whole milk, or more as needed</li>

<li>purple, green, and gold/yellow sparkling sugars</li>
</ul>
</div>

<div className="dessertDirection">
<h2>Directions</h2>
<h2>step 1</h2>
<p>Combine sour cream, 1/3 cup sugar, butter, and salt in a saucepan over medium-low heat. Cook, stirring, until butter melts, about 5 minutes. Remove from heat; let mixture cool to 100 to 110 degrees F, about 15 minutes.</p>

<h2>step 2</h2>
<p>Stir together water, yeast, and remaining 1 tablespoon sugar in a 1-cup glass measuring cup; let stand for 5 minutes.</p>

<h2>step 3</h2>
<p>Combine sour cream mixture, yeast mixture, eggs, and 2 cups of the flour in the bowl of a heavy-duty electric stand mixer fitted with the paddle attachment. Beat at medium speed until smooth, about 1 minute. Reduce speed to low; gradually add 4 more cups of flour, beating until dough comes together.</p>

<h2>step 4</h2>
<p>Turn dough out onto a surface dusted with 1/4 cup of the flour. Knead, gradually adding remaining 1/2 cup flour, 2 tablespoons at a time, until smooth and elastic, about 10 minutes. Dough should be tacky but release easily from surface.</p>

<h2>step 5</h2>
<p>Place dough in a well greased bowl; turn to grease top. Cover; let rise in a warm place until doubled in bulk, 45 minutes to 1 hour.</p>

<h2>step 6</h2>
<p>Meanwhile, prepare the filling. Beat cream cheese, sugars, cinnamon, and vanilla with an electric mixer on medium speed until smooth. Beat in egg.</p>
<h2>step 7</h2>
<p>Gently punch dough down; divide in half. Roll 1 portion out into a 22x12-inch rectangle on a lightly floured surface. Keep the other portion covered. Spread 1/2 of the filling over rectangle, leaving a 1-inch border. Sprinkle with 1/2 cup pecans. Carefully roll up, starting from a long edge.</p>

<h2>step 8</h2>
<p>Place roll, seam-side down, on a large parchment paper-lined baking sheet. Bring ends of roll together to form a ring. Moisten ends with water; pinch together to seal. Repeat with remaining dough, filling, and pecans. Cover and let rise in a warm place until doubled in bulk, 45 minutes to 1 hour.</p>

<h2>step 9</h2>
<p>Preheat the oven to 350 degrees F (175 degrees C). Uncover dough rings.</p>

<h2>step 10</h2>
<p>Bake in the preheated oven until cakes are a deep golden brown, about 25 minutes. Cool cakes completely on wire racks, about 1 1/2 hours.</p>

<h2>step 11</h2>
<p>Stir confectioners' sugar, melted butter, and vanilla extract together to make the glaze. Stir in 3 tablespoons milk. Add additional milk, 1 teaspoon at a time, until pourable but still opaque. Pour evenly over cakes. Sprinkle with sparkling sugars, alternating colors to form bands.</p>

<h2>step 12</h2>
<p>close up view of a King Cake garnished with gold, green and purple sprinkles, on a platter</p>
</div>

<div className="dessertsNutrition">
<h1>Nutrition Facts</h1>
   <p>(per serving)</p>
   <div className="dessertNutritionItem">
   <div>
<h3>485</h3>
<p>Calories</p>
</div>
<div>
<h3>22g</h3>
<p>Fat</p>
</div>
<div>
<h3>63g</h3>
<p>Carbs</p>
</div>
<div>
<h3>9g</h3>
<p>Protein</p>
</div>
</div>
</div>

<div className="dessertFacts">
<div onClick={openDesserts}>{dessertsState?(<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
<div onClick={closeDesserts} className="closeDesserts">{dessertsState ?"": (
  <div className="cakeItem">
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe: 20</p>
<div className="gradientLine"></div>
<p>Calories: 485</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat: 22g	29%</p>
<div className="gradientLine"></div>
<p>Saturated Fat: 11g	56%</p>
<div className="gradientLine"></div>
<p>Cholesterol: 73mg	24%</p>
<div className="gradientLine"></div>
<p>Sodium: 236mg	10%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate: 63g	23%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber 2g	6%</p>
<div className="gradientLine"></div>
<p>Total Sugars 31g</p>
<div className="gradientLine"></div>
<p>Protein 9g</p>
<div className="gradientLine"></div>
<p>Vitamin: C 0mg	2%</p>
<div className="gradientLine"></div>
<p>Calcium: 65mg	5%</p>
<div className="gradientLine"></div>
<p>Iron: 3mg	14%</p>
<div className="gradientLine"></div>
<p>Potassium: 156mg	3%</p>
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
