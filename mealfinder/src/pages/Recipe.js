import React,{useEffect,useContext} from 'react';
import MealContext from '../context/MealContext'
import { Badge, Stack,Button, filter, HStack, VStack, Heading,Image,Text } from '@chakra-ui/react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,
} from "react-router-dom";

 const Recipe =(props)=>{
    const{getMealDetails,mealDetail}=useContext(MealContext)
 let{id}=useParams()
useEffect(()=>{
getMealDetails(id)
},[])

const validIngredients = Object.keys(mealDetail)
.filter(
  (key) => key.startsWith('strIngredient') && mealDetail[key] !== null
)
.map((key) => mealDetail[key]);

 console.log('ingredients:',validIngredients)    

 const measuremnts = Object.keys(mealDetail)
.filter(
  (key) => key.startsWith('strMeasure') && mealDetail[key] !== null
)
.map((key) => mealDetail[key]);

 console.log('ingredients:',typeof(validIngredients)    )
 console.log('measurement:',measuremnts)

    return(
        <>
        <HStack justifyContent='center'>
            <Heading>{mealDetail.strMeal}</Heading>
        </HStack>
        <HStack justifyContent='space-around'>
            
            <VStack alignItems='center'>
                
<Image src={mealDetail.strMealThumb} boxSize="70%" borderRadius="25px" mt="40px"/>
<Text>Category - {mealDetail.strCategory}</Text> <Text>Area - {mealDetail.strArea}</Text>
<Link to={mealDetail.strYoutube}>Watch Video</Link>
                
            </VStack>
            <div>
<Heading>ingredients</Heading>
 
 {mealDetail.strIngredient1}
            </div>
        </HStack>
        </>
    )
}

export default Recipe