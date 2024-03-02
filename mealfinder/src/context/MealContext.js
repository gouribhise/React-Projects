import React, { createContext,useState,useEffect } from 'react'

const MealContext=createContext()


export const MealProvider=({children})=>{
return (
    <MealContext.Provider value='hello'>
        {children}
    </MealContext.Provider>
)

}

export default MealContext

