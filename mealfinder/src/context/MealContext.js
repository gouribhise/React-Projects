import React, { createContext,useState,useEffect } from 'react'
import axios from 'axios'
const BASE_URL='https://themealdb.com/api/json/v1/1/'
 
const MealContext=createContext()


export const MealProvider=({children})=>{
    const[categories,setCategories]=useState([])
    const getCategories = async () => {        
        try {
            const response = await fetch(`${BASE_URL}categories.php`);
            const data = await response.json();
            console.log('what is data:',data);
            setCategories(data)
          } catch (error) {
            console.log(error.response);
          }
    }
console.log('test:',categories)
    useEffect(()=>{
getCategories()
    },[])
return (
    <MealContext.Provider value='hello'>
        {children}
    </MealContext.Provider>
)

}

export default MealContext

