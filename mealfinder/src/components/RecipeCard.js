import React,{useContext,useEffect} from 'react'
import { Card,  CardBody, Box, Stack,Text, HStack, VStack,Image, Flex,Spacer, Heading } from '@chakra-ui/react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink,Outlet} from 'react-router-dom'

import MealContext from '../context/MealContext'

const RecipeCard=()=>{
    const {filteredData,filterByCat,category}=useContext(MealContext)
     useEffect(()=>{
filterByCat(category)
    },[])
    // const data = [...new Set(filteredData)];
    // console.log('recipe card data:',data)

   
    // const data = filteredData.filter((element, index) => {
    //   return filteredData.indexOf(element) === index;
    // });

     
     return (
        <div>
          <Heading mt={5}>{category.charAt(0).toUpperCase()+category.slice(1)}</Heading>

           <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,3fr))"
        gridGap={4}
        ml="20vw"
       >

  {filteredData.map((item)=>{

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