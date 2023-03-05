import React from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import "../sass/Roasted.scss"
import { useState } from "react"

export default function Roasted() {

  const [roasted ,setRoasted] = useState("false")

  function openRoasted(){
       setRoasted(!roasted)
  }
  function closeRoasted(){
    setRoasted(false)
  }
  return (
    <div className="roastedSection">
     <NavBar/>
<div className="roastedBody">
<h1>Spatchcocked Butter-Roasted Lemon and Herb Turkey with Gravy</h1>

<p>This roast turkey recipe is certainly a labor of love! Spatchcocking a turkey isn't difficult but it takes a bit of muscle and some guts. I love how evenly poultry cooks when it has been spatchcocked. The butter mixture is very delicious and adds a ton of flavor to the turkey. Perfect for Thanksgiving dinner!</p>
<img src="Spatchcocked-Butter-Roasted-Lemon-And-Herb-Turkey-With-Gravy.jpg" alt=""/> 

<div className="timingCard">
<div className="timing-grid">
<div>
<h3>Prep Time:</h3>
<p>1 hrs</p>
</div>
<div>
<h3>Cook Time:</h3>
<p>2 hrs 20 mins</p>
</div>
<div>
<h3>Total Time:</h3>
<p>3 hrs 20 mins</p>
</div>
<div>
<h3>Servings:</h3>
<p>12</p>
</div>
<div>
<h3>Yield:</h3>
<p>1 whole turkey</p>
</div>
</div>
<a href="#roastedNutri">Jump to Nutrition Facts</a>

</div>

<div className="ingredients">
<h3>Ingredients</h3>
<ul>
<li>1 cup salted butter, softened</li>
<li>2 tablespoons Dijon mustard</li>
<li>1 ½ tablespoons chopped fresh thyme leaves</li>
<li>1 tablespoon fresh lemon juice</li>

<li>1 teaspoon grated lemon zest</li>

<li>1 teaspoon chopped fresh rosemary</li>

<li>1 teaspoon kosher salt, divided, plus more to taste</li>

<li>1 teaspoon ground black pepper, divided, or more to taste</li>

<li>3 cups coarsely chopped sweet onion</li>

<li>2 cups coarsely chopped carrot</li>

<li>2 cups coarsely chopped celery</li>

<li>1 (12 pound) turkey, thawed if purchased frozen</li>

<li>½ cup dry white wine</li>

<li> 2 tablespoons finely chopped shallot</li>

<li>¼ cup all-purpose flour</li>

<li>4 ½ cups chicken stock, or more as needed</li>
</ul>
</div>

<div className="directions">
<h1>Directions</h1>
<h2>step 1</h2>
<p>Preheat the oven to 450 degrees F (230 degrees C) with an oven rack in the lower third of the oven. Locate a rack that fits inside a large rimmed baking sheet, and set aside.</p>

<h2>step 2</h2>
<p>Stir together softened butter, mustard, thyme, lemon juice and zest, rosemary, 1/2 teaspoon salt, and 1/2 teaspoon pepper in a medium bowl until mixture is well blended. Set aside. Spread chopped onion, carrots, and celery in an even layer on the baking sheet, and top the baking sheet with the rack. Set aside while you prepare the turkey.</p>

<h2>step 3</h2>
<p>To spatchcock (or butterfly) the turkey, create a workspace by placing a clean kitchen towel underneath a large cutting board. Place thawed and well-drained turkey on the work surface, and pat as dry as you can with a few paper towels. Arrange bird so backbone is facing up. Use a sharp pair of poultry shears to cut next to the backbone on one side from the tail end to the neck. You will be cutting through bones, so a firm grasp and sharp shears are a must. Use a paper towel or clean kitchen towel to ensure you have a good grasp of the bird if you are having any trouble.</p>

<h2>step 4</h2>
<p>Grasp the bird with a paper towel on the cut side of the backbone and make another cut with poultry shears along the other side to free the backbone, removing it from the bird. Use your shears to cut the backbone into 3 to 4 pieces crosswise, and place on a plate to use later to make the gravy. Pick the bird up (you will now have a U-shaped turkey), flip it, and place turkey on the work surface with the breast facing up. Use the palms of your hands with fingers interlaced, and press quickly and firmly down on the breast bone of the bird to flatten it. You should hear a slight crack, as the breastbone breaks and bird flattens.</p>

<h2>step 5</h2>
<p>Place turkey breast side up on the prepared rack above the layer of vegetables on the baking sheet. Pat the outside of the turkey dry with paper towels, and tuck wing tips underneath the bird. Gently slide your hands underneath the skin of the turkey along the breasts, being careful to keep skin intact. With your hands, evenly place half of the herb butter mixture (about 2/3 cup) underneath the loosened skin, pressing butter into an even layer by gently smoothing the top of the skin with your other hand to evenly distribute butter.</p>

<h2>step 6</h2>
<p>Wash your hands, then melt the other half of the herb butter mixture in the microwave on high power for 20 seconds. Using a basting brush, brush some of the melted butter over the surface of prepared turkey, and sprinkle evenly with remaining salt and pepper. Add 1 tablespoon of the remaining herb butter mixture to a large saucepan (for the gravy), and reserve remaining butter for basting while roasting.</p>

<h2>step 7</h2>
<p>Roast turkey in the preheated oven until the thickest part of the thigh meat registers 165 degrees F (74 degrees C) on a meat thermometer, about 1 hour and 30 minutes. Turn baking sheet halfway through to ensure even browning and baste with the melted herb butter every 30 minutes. Tent with foil if any of the skin begins to brown too much.</p>

<h2>step 8</h2>
<p>While turkey roasts, begin to prepare the gravy. Place the large saucepan with the reserved butter mixture over medium-high heat. Add reserved cut backbone pieces; cook, stirring often, until browned all over, about 8 minutes. Reduce heat to low and add just enough water to barely cover the backbone pieces (about 2 cups). Cover saucepan and simmer mixture on lowest heat while turkey finishes roasting.</p>

<h2>step 9</h2>
<p>When turkey is done, carefully transfer the rack with the turkey from the baking sheet to a cutting board to rest, tenting with foil to keep it warm. Spoon vegetables and all drippings from the baking sheet into the saucepan with backbone pieces. Place the baking sheet over two burners of the stove, over medium heat. Carefully pour white wine and 1/2 cup of the chicken stock onto the baking sheet, and gently scrape surface of baking sheet with a spoon as the liquids bubble to remove any browned bits that have baked on. Carefully pour contents of baking sheet into the saucepan with the roasted vegetables and drippings. Add 2 additional cups of chicken stock to the saucepan, and bring to a boil over medium-high heat. Cook, stirring occasionally, until flavors meld, about 15 minutes.</p>

<h2>step 10</h2>
<p>Set a fine mesh strainer over a large bowl or measuring cup. Drain gravy through strainer to separate solids from the broth; press on the solids to release as much of the liquid as you can from them. Discard solids. Allow strained liquid to stand for 5 minutes and then skim the fat from the top of the surface. Keep 3 tablespoons of the fat and discard the rest.</p>

<h2>step 11</h2>
<p>Lightly wipe the same large saucepan clean with a paper towel, then add reserved fat to saucepan over medium-high. Add shallots to saucepan, and cook, stirring often, until softened, about 2 minutes. Add flour to saucepan, and stir constantly until well-combined with fat, about 1 minute. Add strained liquid and enough chicken stock to measure a total of 6 cups liquid (about 2 additional cups of stock) to saucepan over medium-high. Bring mixture to a boil, stirring constantly while boiling, for 1 minute. Reduce heat to medium, and allow mixture to simmer and reduce by half, 25 to 30 minutes. Season gravy with any additional salt and pepper as needed.</p>

<h2>step 12</h2>
<p>Remove turkey from rack, and place on a work surface to slice as you wish; serve with hot gravy.</p>
   </div>

<div className="roastedNutri" id="roastedNutri">
<h2>Nutrition Facts</h2>
<p>(per serving)</p>
<div className="rostedNutriItems">
<div>
<h2>779</h2>
<p>Calories</p>
</div>
<div>
<h2>44g</h2>
<p>Fat</p>
</div>
<div>
<h2>9g</h2>
<p>Carbs</p>
</div>
<div>
<div>
<h2>80g</h2>
<p>Protein</p> 
</div> 
</div>
</div>
</div>
<div className="nutritionFact">
    <div onClick={openRoasted}>{roasted?(<p>Show Full Nutrition</p>):(<p>Hide Full Nutrition</p>)}</div>
    <div onClick={closeRoasted} className="closeRoasted">{roasted?"":(
      <div className="roastedItems">       
    <h2>Nutrition Facts</h2>
    <div className="gradientLine"></div>
  <p>Servings Per Recipe :12</p>
  <div className="gradientLine"></div>
<p>Calories: 779</p>
<div className="gradientLine"></div>
<p>% Daily Value *</p>
<div className="gradientLine"></div>
<p>Total Fat 44g:	57%</p>
<div className="gradientLine"></div>
<p>Saturated Fat: 17g	86%</p>
<div className="gradientLine"></div>
<p>Cholesterol: 296mg	99%</p>
<div className="gradientLine"></div>
<p>Sodium :784mg	34%</p>
<div className="gradientLine"></div>
<p>Total Carbohydrate: 9g	3%</p>
<div className="gradientLine"></div>
<p>Dietary Fiber: 2g	6%</p>
<div className="gradientLine"></div>
<p>Protein: 80g</p>
<div className="gradientLine"></div>
<p>Potassium :1206mg	26%</p>
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
