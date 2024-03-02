import React,{useContext} from 'react'
import { Card,  CardBody, Box, Stack,Text, HStack, VStack,Image, Flex,Spacer, filter } from '@chakra-ui/react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink,Outlet} from 'react-router-dom'

import MealContext from '../context/MealContext'

const RecipeCard=()=>{
    const {filteredData}=useContext(MealContext)
    // const data = [...new Set(filteredData)];
    // console.log('recipe card data:',data)

    const data = filteredData.filter((element, index) => {
      return filteredData.indexOf(element) === index;
    });
console.log('recipecard:',filteredData)
    return (
        <div>
           <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,3fr))"
        gridGap={4}
        ml="20vw"
       >
 {data.map((item)=>{

return(

  <HStack w={{ md: '50%' }} justify="center" spacing={3}>            <VStack>
       <Card >
<CardBody>
<Image src={item.strMealThumb} boxSize='250px'       borderRadius='md'/>

   <ChakraLink as={ReactRouterLink} to={{pathname:`recipe/${item.idMeal}`,state:{test:'hello'}}} >
  <Text>{item.strMeal}</Text></ChakraLink>
  </CardBody>
  </Card>
  </VStack>
  </HStack>)
 })}   
      </Box>
        </div>
    )
}

export default RecipeCard