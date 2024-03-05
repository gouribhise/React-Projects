import React,{useContext,useEffect} from 'react'
import Categories from '../components/Categories'
import RecipeCard from '../components/RecipeCard'
import MealContext from '../context/MealContext'
 const Home=()=>{
   
    return (
        <>
         <Categories/>
       
        <RecipeCard/>
        
         </>
        
    )
}

export default Home