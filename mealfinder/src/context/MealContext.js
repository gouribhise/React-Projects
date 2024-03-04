import React, { createContext,useState,useEffect } from 'react'
import axios from 'axios'
const BASE_URL='https://themealdb.com/api/json/v1/1/'
 
const MealContext=createContext()


export const MealProvider=({children})=>{
    const[categories,setCategories]=useState([])
    const[filteredData,setFilteredData]=useState([])
    const [mealDetail,setMealDetail]=useState([])
    const getCategories = async () => {        
        try {
            const response = await fetch(`${BASE_URL}categories.php`);
            const data = await response.json();
            console.log('what is data:',data);
            setCategories(data.categories)
          } catch (error) {
            console.log(error.response);
          }
    }
     useEffect(()=>{
getCategories()
    },[])

const filterByCat=async(term)=>{
    console.log('what is term:',term)
    try{
        const response=await fetch(`${BASE_URL}filter.php?c=${term}`);
        const data= await response.json();
        console.log('filter data:',data)
        setFilteredData(data.meals)

    }catch(error){
        console.log(error.response)
    }
}

//filter by first letter
const filterByLetter=async(letter)=>{
    try{
        const response=await fetch(`${BASE_URL}search.php?f=${letter}`);
        const data=await response.json();
        setFilteredData(data.meals)
        console.log('filter by letter',data.meals)
    }catch(error){
        console.log(error.response)
    }
}

//get random recipe
const getRandom=async()=>{
    try{
        const response=await fetch(`${BASE_URL}random.php`);
        const data=await response.json()
        setFilteredData(data.meals[0])
        console.log('randome recipe:',data.meals)
    }catch(error){
        console.log(error.response)
    }
}

const getMealDetails=async(meal)=>{
    try{
        const response=await fetch(`${BASE_URL}lookup.php?i=${meal}`);
        const data= await response.json();
        console.log('filter data:',data)
setMealDetail(data.meals[0])
    }catch(error){
        console.log(error.response)
    }
}
return (
    <MealContext.Provider value={{categories,filteredData,filterByCat,getMealDetails,mealDetail,filterByLetter,getRandom}}>
        {children}
    </MealContext.Provider>
)

}

export default MealContext

