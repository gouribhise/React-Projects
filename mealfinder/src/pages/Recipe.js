import React,{useEffect,useContext} from 'react';
import MealContext from '../context/MealContext'
import { Badge, Stack,Button, filter, HStack, VStack, Heading,Image,Text, Box } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
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

 
 

 const measuremnts = Object.keys(mealDetail)
.filter(
  (key) => key.startsWith('strMeasure') && mealDetail[key] !== null
)
.map((key) => mealDetail[key]);

 console.log('inside recipe page:',mealDetail)
 
    return(
        <>
        <HStack justifyContent='center'>
            <Heading>{mealDetail.strMeal}</Heading>
        </HStack>
        <HStack>
            
            <VStack alignItems='center' >
                
<Image src={mealDetail.strMealThumb} boxSize="70%" borderRadius="25px" mt="-50px"/>
<Text>Category - {mealDetail.strCategory}</Text> <Text>Area - {mealDetail.strArea}</Text>

{mealDetail.strYoutube?<><Heading>Watch Video</Heading>
<ReactPlayer url={mealDetail.strYoutube}  controls="true"/></>:null}

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
<Box w="50vw" h="50vh" > 
    
    <Heading size="sm">Instructions</Heading>
    
    <ul>
    {mealDetail.strInstructions? mealDetail.strInstructions.split('\r\n\r\n').map((line, index) => (

 <li key={index} >{line}</li>

)):null}</ul>
   </Box>
 

            
            </VStack>
 </VStack>

            
        </HStack>
        </>
    )
}

export default Recipe