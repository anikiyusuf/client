import { dishLists } from "../List/dishLists";
import { cuisineLists } from "../List/cuisineLists"
import { ingredientLists } from "../List/ingredientLists";
import { occasionLists } from "../List/occasionLists";
import { cookingTipLists } from "../List/cookingtipLists";
import { categoriesLists } from "../List/categoriesLists";
import { dietLists } from "../List/dietPrescriptionLists";
import { blogLists } from "../List/blogLists";
import {useState} from "react"
import "./sass/Menu.scss"

  const MenuItems  = () => {
    const [Dropdown , setDropdown] = useState("false")
    const [drop,setDrop] = useState("false")
    const [dropIngredient , setDropIngredient] = useState("false")
    const [dropOccasion , setOccasion] = useState("false")
    const [dropCooking , setDropCooking] = useState("false")
    const [dropCategories , setDropCategories] = useState("false")
    const [dropDiet , setDropDiet] = useState("false")
    const [dropBlog , setDropBlog] = useState("false")
    const [hamburger, setHamburger] = useState("false")

  
    // Dish Type dropdown
    function openIcon(){
      setDropdown(!Dropdown)
    }
    function closeIcon(){
      setDropdown(false)
    }
      // Cuisine 
    function cuisineOpen(){
      setDrop(!drop)
    }
    function cuisineClose(){
      setDropdown(false)
    }

    function ingredientOpen(){
      setDropIngredient(!dropIngredient)
    }
    function ingredientClose(){
      setDropIngredient(false)
    }

    // Occasion
    function occasionOpen(){
      setOccasion(!dropOccasion)
    }
    function occasionClose(){
      setOccasion(false)
    }
    // Cooking 
    function cookingOpen(){
      setDropCooking(!dropCooking)
    }
    function cookingClose(){
      setDropCooking( false )
    }

    // Categories
    function categoriesOpen(){
      setDropCategories(!dropCategories)
    }

    function categoriesClose(){
      setDropCategories(false)
    }

    // Diet 
    function dietOpen(){
      setDropDiet(!dropDiet)
    }
    function dietClose(){
      setDropDiet(false)
    }

    // Blog 
    function blogOpen(){
      setDropBlog(!dropBlog)
    }
    function blogClose(){
      setDropBlog(false)
    }

// Hamburger Menu

function openHandle(){
  setHamburger(!hamburger)
}
function closeHandle(){
  setHamburger(false)
}


        return (

          <div className="NavBarList"  style={{display:"flex"}}>
             <div className="innerNavbarItem">
               {/* Dish Type */}
            <div className="dishList" style={{display:"flex" , paddingRight:"1rem"}}>
              <p>Dish Type</p>
              <div className="dishIcons">
              <div onClick={openIcon}>{Dropdown?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
              <div onClick={closeIcon} className="dishBtn">{Dropdown?"":(<ul>{dishLists.map((dishList, index) =>(<li key={index}><a href={dishList.url}>{dishList.title}</a></li>))}</ul>)}</div>
            </div>
            </div>

                 {/* Cuisine */}
            <div className="Cuisine" style={{display:"flex",paddingRight:"1rem"}}>
               <p>Cuisine</p>
               <div className="cuisineIcon">
               <div onClick={cuisineOpen}>{drop?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={cuisineClose} className="cuisineBtn">{drop?"":(<ul>{cuisineLists.map((cuisineList, index) =>(<li key={index}><a href={cuisineList.url}>{cuisineList.title}</a></li>))}</ul>)}</div>
              </div>
            </div>

            {/* Ingredient Route */}
            <div className="Ingredients" style={{display:"flex" ,paddingRight:"1rem"}}>
              <p>Ingredients</p>
              <div className="ingredientIcons">
             <div onClick={ingredientOpen}>{dropIngredient?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
             <div onClick={ingredientClose} className="ingredientBtn">{dropIngredient?"":(<ul>{ingredientLists.map((ingredientList, index) =>(<li key={index}><a href={ingredientList.url}>{ingredientList.title}</a></li>))}</ul>)}</div>
           </div>
            </div>
     
               {/* Occasions */}
            <div className="occasion" style={{display:"flex"  ,paddingRight:"1rem"}}>
              <p>Occasions</p>
              <div className="occasionIcons">
              <div onClick={occasionOpen}>{dropOccasion?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
              <div onClick={occasionClose} className="occasionBtn">{dropOccasion?"":(<ul>{occasionLists.map((occasionList, index) =>(<li key={index}><a href={occasionList.url}>{occasionList.title}</a></li>))}</ul>)}</div>
             </div>
             </div>



               {/* Cooking Tip */}
             <div className="cookingTip" style={{display:"flex",paddingRight:"1rem"}}>
              <p>Cooking Tips</p>
               <div className="cookingIcons">
               <div onClick={cookingOpen}>{dropCooking?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={cookingClose} className="cookingBtn">{dropCooking?"":(<ul>{cookingTipLists.map((cookingTipList, index) =>(<li key={index}><a href={cookingTipList.url}>{cookingTipList.title}</a></li>))}</ul>)}</div>
            </div>
            </div>
          
               
            {/* categories */}
            <div className="categories" style={{display:"flex",paddingRight:"1rem"}}>
              <p>Categories</p>
              <div className="categoriesIcons">
               <div onClick={categoriesOpen}>{dropCategories?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={categoriesClose} className="categoriesBtn">{dropCategories?"":(<ul>{categoriesLists.map((categoriesList, index) =>(<li key={index}><a href={categoriesList.url}>{categoriesList.title}</a></li>))}</ul>)}</div>
              </div>
            </div>
         
            {/*Diet Prescription   */}
            <div className="dietPrescription" style={{display:"flex",paddingRight:"1rem"}}>
              <p>Diet</p>
              <div className="dietIcons">
             <div onClick={dietOpen}>{dropDiet?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
             <div onClick={dietClose} className="dietBtn">{dropDiet?"":(<ul>{dietLists.map((dietList, index) =>(<li key={index}><a href={dietList.url}>{dietList.title}</a></li>))}</ul>)}</div>
           </div>
            </div>
   
             {/* Blog  */}
             <div className="blog" style={{display:"flex", paddingRight:"1rem"}}>
               <p>Blog</p>
               <div className="blogIcons">
               <div onClick={blogOpen}>{dropBlog?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={blogClose} className="blogBtn">{dropBlog?"":(<ul>{blogLists.map((blogList, index) =>(<li key={index}><a href={blogList.url}>{blogList.title}</a></li>))}</ul>)}</div>
             </div>
            </div>
          </div>



{/* Hamburger Menu */}
          <div className="responsive">
            <div onClick={openHandle} className="menuIcon">{hamburger? (<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="black" fill-rule="evenodd"/></svg>):(<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="black" fill-rule="evenodd" opacity=".201"/></svg>)}</div>
            <div onClick={closeHandle}>{hamburger ?"":(

              <div className="innerHamburger" style={{padding:"1rem"}}>
               {/* Dish Type */}
               <div className="innerHamburgerItem">
            <div className="dishList" style={{display:"flex" , paddingRight:"1rem"}}>
              <p>Dish Type</p>
              <div className="dishIcons">
              <div onClick={openIcon}>{Dropdown?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
              <div onClick={closeIcon} className="dishBtn">{Dropdown?"":(<ul>{dishLists.map((dishList, index) =>(<li key={index}><a href={dishList.url}>{dishList.title}</a></li>))}</ul>)}</div>
              </div>
            </div>

                 {/* Cuisine */}
            <div className="Cuisine" style={{display:"flex",paddingRight:"1rem"}}>
               <p>Cuisine</p>
               <div className="cuisineIcon">
               <div onClick={cuisineOpen}>{drop?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={cuisineClose} className="cuisineBtn">{drop?"":(<ul>{cuisineLists.map((cuisineList, index) =>(<li key={index}><a href={cuisineList.url}>{cuisineList.title}</a></li>))}</ul>)}</div>
              </div>
            </div>

            {/* Ingredient Route */}
            <div className="Ingredients" style={{display:"flex" ,paddingRight:"1rem"}}>
              <p>Ingredients</p>
              <div className="ingredientIcons">
             <div onClick={ingredientOpen}>{dropIngredient?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
             <div onClick={ingredientClose} className="ingredientBtn">{dropIngredient?"":(<ul>{ingredientLists.map((ingredientList, index) =>(<li key={index}><a href={ingredientList.url}>{ingredientList.title}</a></li>))}</ul>)}</div>
           </div>
            </div>
     
               {/* Occasions */}
            <div className="occasion" style={{display:"flex"  ,paddingRight:"1rem"}}>
              <p>Occasions</p>
              <div className="occasionIcons">
              <div onClick={occasionOpen}>{dropOccasion?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
              <div onClick={occasionClose} className="occasionBtn">{dropOccasion?"":(<ul>{occasionLists.map((occasionList, index) =>(<li key={index}><a href={occasionList.url}>{occasionList.title}</a></li>))}</ul>)}</div>
             </div>
             </div>



               {/* Cooking Tip */}
             <div className="cookingTip" style={{display:"flex",paddingRight:"1rem"}}>
              <p>Cooking Tips</p>
               <div className="cookingIcons">
               <div onClick={cookingOpen}>{dropCooking?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={cookingClose} className="cookingBtn">{dropCooking?"":(<ul>{cookingTipLists.map((cookingTipList, index) =>(<li key={index}><a href={cookingTipList.url}>{cookingTipList.title}</a></li>))}</ul>)}</div>
            </div>
            </div>
          
               
            {/* categories */}
            <div className="categories" style={{display:"flex",paddingRight:"1rem"}}>
              <p>Categories</p>
              <div className="categoriesIcons">
               <div onClick={categoriesOpen}>{dropCategories?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={categoriesClose} className="categoriesBtn">{dropCategories?"":(<ul>{categoriesLists.map((categoriesList, index) =>(<li key={index}><a href={categoriesList.url}>{categoriesList.title}</a></li>))}</ul>)}</div>
              </div>
            </div>
         
            {/*Diet Prescription   */}
            <div className="dietPrescription" style={{display:"flex",paddingRight:"1rem"}}>
              <p>Diet</p>
              <div className="dietIcons">
             <div onClick={dietOpen}>{dropDiet?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
             <div onClick={dietClose} className="dietBtn">{dropDiet?"":(<ul>{dietLists.map((dietList, index) =>(<li key={index}><a href={dietList.url}>{dietList.title}</a></li>))}</ul>)}</div>
           </div>
            </div>
   
             {/* Blog  */}
             <div className="blog" style={{display:"flex", paddingRight:"1rem"}}>
               <p>Blog</p>
               <div className="blogIcons">
               <div onClick={blogOpen}>{dropBlog?(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>):(<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>)} </div>
               <div onClick={blogClose} className="blogBtn">{dropBlog?"":(<ul>{blogLists.map((blogList, index) =>(<li key={index}><a href={blogList.url}>{blogList.title}</a></li>))}</ul>)}</div>
             </div>
            </div>
            </div>
          </div>

            )}</div>
          </div>  

         </div>

        )
        
      
    };

    export default MenuItems;