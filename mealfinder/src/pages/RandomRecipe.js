import React,{useEffect,useContext} from 'react'
import MealContext from '../context/MealContext'
import {Link} from 'react-router-dom'
import { Badge, Stack,Button, filter, HStack, VStack, Heading,Image,Text, Box } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

const RandomRecipe=()=>{
    const {getRandom,randomData}=useContext(MealContext)
    useEffect(()=>{
        getRandom()
    },[])
 
    return(
        <>
        <HStack justifyContent='center'>
        <Heading>{randomData.strMeal}</Heading>
        </HStack>

    <HStack>
    <VStack alignItems='center' >
                
                <Image src={randomData.strMealThumb} boxSize="70%" borderRadius="25px" mt="-50px"/>
                <Text>Category - {randomData.strCategory}</Text> <Text>Area - {randomData.strArea}</Text>
                {randomData.strYoutube?<><Heading>Watch Video</Heading>
<ReactPlayer url={randomData.strYoutube}  controls="true"/></>:null}
                            
                        </VStack>

                        <VStack alignItems="flex-start" mt="20px" >
            
            <Heading size="sm" mt="20px">Ingredients</Heading>

            <Text>{randomData.strIngredient1} - {randomData.strMeasure1}</Text>
            <Text>{randomData.strIngredient2} - {randomData.strMeasure2}</Text>
            <Text>{randomData.strIngredient3} - {randomData.strMeasure3}</Text>
            <Text>{randomData.strIngredient4?<Text>{randomData.strIngredient4} - {randomData.strMeasure4}</Text>:null}</Text>
            <Text>{randomData.strIngredient5?<Text>{randomData.strIngredient5} - {randomData.strMeasure5}</Text>:null}</Text>
            <Text>{randomData.strIngredient6?<Text>{randomData.strIngredient6} - {randomData.strMeasure6}</Text>:null}</Text>
            <Text>{randomData.strIngredient7?<Text>{randomData.strIngredient7} - {randomData.strMeasure7}</Text>:null}</Text>
            <Text>{randomData.strIngredient8?<Text>{randomData.strIngredient8} - {randomData.strMeasure8}</Text>:null}</Text>
            <Text>{randomData.strIngredient9?<Text>{randomData.strIngredient9} - {randomData.strMeasure9}</Text>:null}</Text>
            <Text>{randomData.strIngredient10?<Text>{randomData.strIngredient10} - {randomData.strMeasure10}</Text>:null}</Text>
            
             <Box w="50vw" h="50vh">
    
    <Heading size="sm">Instructions</Heading>
     
    <ul>
    {randomData.strInstructions? randomData.strInstructions.split('\r\n').map((line, index) => (

 <li key={index} >{line}</li>

)):null}</ul>
    </Box>
    </VStack>
    </HStack>

    </>
            
     

      
    )
}

export default RandomRecipe