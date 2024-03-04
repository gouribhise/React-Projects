import React,{useEffect,useContext} from 'react'
import MealContext from '../context/MealContext'
import {Link} from 'react-router-dom'
import { Badge, Stack,Button, filter, HStack, VStack, Heading,Image,Text, Box } from '@chakra-ui/react'

const RandomRecipe=()=>{
    const {getRandom,filteredData}=useContext(MealContext)
    useEffect(()=>{
        getRandom()
    },[])
 
    return(
        <>
        <HStack justifyContent='center'>
        <Heading>{filteredData.strMeal}</Heading>
        </HStack>

    <HStack>
    <VStack alignItems='center' >
                
                <Image src={filteredData.strMealThumb} boxSize="70%" borderRadius="25px" mt="-50px"/>
                <Text>Category - {filteredData.strCategory}</Text> <Text>Area - {filteredData.strArea}</Text>
                <Link to={filteredData.strYoutube}>Watch Video</Link>
                            
                        </VStack>

                        <VStack alignItems="flex-start" mt="20px" >
            
            <Heading size="sm" mt="20px">Ingredients</Heading>

            <Text>{filteredData.strIngredient1} - {filteredData.strMeasure1}</Text>
            <Text>{filteredData.strIngredient2} - {filteredData.strMeasure2}</Text>
            <Text>{filteredData.strIngredient3} - {filteredData.strMeasure3}</Text>
            <Text>{filteredData.strIngredient4?<Text>{filteredData.strIngredient4} - {filteredData.strMeasure4}</Text>:null}</Text>
            <Text>{filteredData.strIngredient5?<Text>{filteredData.strIngredient5} - {filteredData.strMeasure5}</Text>:null}</Text>
            <Text>{filteredData.strIngredient6?<Text>{filteredData.strIngredient6} - {filteredData.strMeasure6}</Text>:null}</Text>
            <Text>{filteredData.strIngredient7?<Text>{filteredData.strIngredient7} - {filteredData.strMeasure7}</Text>:null}</Text>
            <Text>{filteredData.strIngredient8?<Text>{filteredData.strIngredient8} - {filteredData.strMeasure8}</Text>:null}</Text>
            <Text>{filteredData.strIngredient9?<Text>{filteredData.strIngredient9} - {filteredData.strMeasure9}</Text>:null}</Text>
            <Text>{filteredData.strIngredient10?<Text>{filteredData.strIngredient10} - {filteredData.strMeasure10}</Text>:null}</Text>
            
             <Box w="50vw" h="50vh">
    
    <Heading size="sm">Instructions</Heading>
    {filteredData.strInstructions}</Box>
    </VStack>
    </HStack>

    </>
            
     

      
    )
}

export default RandomRecipe