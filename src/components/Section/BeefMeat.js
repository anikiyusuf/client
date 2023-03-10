import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "../sass/BeefMeat.scss"
import { useState } from "react"



export default function BeefMeat(){

    const [label , setLabel] = useState("false")

    function openLabel(){
        setLabel(!label)
    }
    function closeLabel(){
        setLabel(false)
    }
    return (
        <div className="BeefSection"  id="BeefMeat">
        <NavBar/>
       <div className="beefLoaf">
       <h1>Best Ever Meat Loaf</h1>
       <p>This best ever meatloaf recipe lives up to its name and is my favorite I have found. Try it and you will see.</p>
       <img src="Best-Ever-Meatloaf.jpg" alt="avatar"  className="beefImage" />
       <div className="timing">
       <div>
       <h3>Prep Time:</h3>
       <p>20 mins</p>
       </div>
       <div>
       <h3>Cook Time:</h3>
       <p>1 hrs</p>
       </div>
       <div>
       <h3>Total Time:</h3>
       <p>1 hrs 20 mins</p>
       </div>
       <div>
        <h3>Servings:</h3>
         <p>6</p>
         </div>
         <a href="#nutrition">Jump to Nutrition Facts</a>
         {/* <Link to="#nutrition" style={{textDecoration:"none",color:"hsl(277, 100%, 62%)" ,fontWeight:"500"}}>Jump to Nutrition Facts</Link> */}
</div>

<div className="ingredients">
<h2>Ingredients</h2>
<ul>
<li>2 large eggs</li>
<li>⅔ cup milk</li>
<li>2 teaspoons salt</li>

<li>¼ teaspoon ground black pepper</li>

<li>3 slices bread, crumbled</li>

<li>1 ½ pounds ground beef</li>

<li>1 onion, chopped</li>

<li>1 cup shredded Cheddar cheese</li>

<li>½ cup shredded carrot</li>

<li>¼ cup brown sugar</li>

<li>¼ cup ketchup</li>

<li>1 tablespoon prepared yellow mustard</li>
</ul>
</div>

<div className="directions">

<h1>Directions</h1>
<h2>step1</h2>
<p>Preheat the oven to 350 degrees F (175 degrees C).</p>

<h2>step2</h2>
<p>Whisk eggs, milk, salt, and ground black pepper in a large bowl. Add crumbled bread and stir until dissolved. Mix ground beef, onion, Cheddar cheese, and carrot into bread mixture; transfer mixture to a 9x5-inch loaf pan. Combine brown sugar, ketchup, and mustard in a small bowl; spread over the meat mixture.</p>

<h2>step 3</h2>
<p>Bake in the preheated oven until no longer pink in the center, 60 to 75 minutes. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C).</p>
</div>
<div className="nutritionFacts" id="nutrition">
<h1>Nutrition Facts</h1>
   <p>(per serving)</p>
   <div className="nutritionItems">
   <div>
<h3>410</h3>
<p>Calories</p>
</div>
<div>
<h3>23g</h3>
<p>Fat</p>
</div>
<div>
<h3>22g</h3>
<p>Carbs</p>
</div>
<div>
<h3>28g</h3>
<p>Protein</p>
</div>
</div>
</div>

<div className="fullLabel">
    <div onClick={openLabel}>{ label ?(<p>Show Full Nutrition Label</p>):(<p>Hide Full Nutrition Label</p>)}</div>
     <div onClick={closeLabel} className="closeLabel">{label?"":(
   <div  className="labelItem">     
<h2>Nutrition Facts</h2>
<div className="gradientLine"></div>
<p>Servings Per Recipe:6</p>
<div className="gradientLine"></div>
<p>Calories: 410</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat: 23g	29%</p>
<div className="gradientLine"></div>
<p>Saturated Fat: 10g	52%</p>
<div className="gradientLine"></div>
<p>Cholesterol: 155mg	52%</p>
<div className="gradientLine"></div>
<p>Sodium :1227mg	53%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate: 22g	8%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber: 1g	4%</p>
<div className="gradientLine"></div>
<p>Total Sugars: 14g</p>
<div className="gradientLine"></div>
<p>Protein: 28g</p>
<div className="gradientLine"></div>
<p>Vitamin C:4mg	18%</p>
<div className="gradientLine"></div>
<p>Calcium: 223mg	17%</p>
<div className="gradientLine"></div>
<p>Iron: 3mg	17%</p>
<div className="gradientLine"></div>
<p>Potassium:435mg	9%</p>
<p>* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>

<p>* Nutrient information is not available for all ingredients. Amount is based on available nutrient data.</p>

<p>(-) Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.</p>
    
    </div> )}</div> </div>
</div>
 <Footer/>
 </div>
    )
}