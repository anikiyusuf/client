import React, { useState , useEffect }  from "react";
import HomePage from "./components/HomePage";
import "./components/sass/App.scss"
import LoadingPage from "./components/LoadingPage";


function App() {
  useEffect(() =>{
  fetch("http://localhost:8000/")
     .then((res) =>{
      return res.json();
     })
     .then((data) =>{
      console.log(data)
     })
     .catch((err) =>{
      console.log(err)
     })
  }, [])

  
  const [preLoading , setPreLoading]  = useState(true)
    
     setTimeout(() =>{
            setPreLoading(false)
     },3000)

    
  return (
    <div className="App">
     {preLoading? <LoadingPage/>:<HomePage/> } 
    </div>
  );
}

export default App;
