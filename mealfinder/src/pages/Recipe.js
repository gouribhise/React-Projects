import React,{useEffect,useContext} from 'react';
import MealContext from '../context/MealContext'
import { Badge, Stack,Button, filter, HStack, VStack, Heading,Image,Text, Box } from '@chakra-ui/react'

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
        <HStack>
            
            <VStack alignItems='center' >
                
<Image src={mealDetail.strMealThumb} boxSize="70%" borderRadius="25px" mt="-200px"/>
<Text>Category - {mealDetail.strCategory}</Text> <Text>Area - {mealDetail.strArea}</Text>
<Link to={mealDetail.strYoutube}>Watch Video</Link>
                
            </VStack>
            <VStack alignItems="flex-start" mt="20px" >
            
<Heading size="sm" mt="20px">Ingredients</Heading>
 
<Text>{mealDetail.strIngredient1} - {mealDetail.strMeasure1}</Text>
 <Text>{mealDetail.strIngredient2} - {mealDetail.strMeasure2}</Text>
 <Text>{mealDetail.strIngredient3} - {mealDetail.strMeasure3}</Text>
 <Text>{mealDetail.strIngredient4?<Text>{mealDetail.strIngredient4} - {mealDetail.strMeasure4}</Text>:null}</Text>
 <Text>{mealDetail.strIngredient5?<Text>{mealDetail.strIngredient5} - {mealDetail.strMeasure5}</Text>:null}</Text>
 <Text>{mealDetail.strIngredient6?<Text>{mealDetail.strIngredient6} - {mealDetail.strMeasure6}</Text>:null}</Text>
 <Text>{mealDetail.strIngredient7?<Text>{mealDetail.strIngredient7} - {mealDetail.strMeasure7}</Text>:null}</Text>
 <Text>{mealDetail.strIngredient8?<Text>{mealDetail.strIngredient8} - {mealDetail.strMeasure8}</Text>:null}</Text>
 <Text>{mealDetail.strIngredient9?<Text>{mealDetail.strIngredient9} - {mealDetail.strMeasure9}</Text>:null}</Text>
 <Text>{mealDetail.strIngredient10?<Text>{mealDetail.strIngredient10} - {mealDetail.strMeasure10}</Text>:null}</Text>
 <VStack>
<Box w="50vw" h="50vh">
    
    <Heading size="sm">Instructions</Heading>
    {mealDetail.strInstructions}</Box>
 
 
            
            </VStack>
 </VStack>

            
        </HStack>
        </>
    )
}

export default Recipe