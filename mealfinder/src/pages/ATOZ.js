import React,{useContext} from 'react'
import { Card, CardBody,Button,   HStack, VStack, Heading,Image,Text, Box } from '@chakra-ui/react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink,Outlet} from 'react-router-dom'

import MealContext from '../context/MealContext'
const ATOZ=()=>{
    const{filteredData,filterByLetter}=useContext(MealContext)
    console.log('inside a to z:',filteredData)
    const letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    const data = filteredData.filter((element, index) => {
        return filteredData.indexOf(element) === index;
      });
    return (
        <HStack   >
                 <Box
        display="grid"
        gridTemplateColumns="repeat(6,minmax(0,1fr))"
        gridGap={4}
      
        alignSelf='start'
  w="40%"
       >
 {letters.map((item)=>{
    return <Button onClick={()=>filterByLetter(item)}>{item}</Button>
 })}
       </Box>
       <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={1}
      w="100%"
       >
       {data.map((item)=>{

return(

          <VStack>
       <Card >
<CardBody>
<Image src={item.strMealThumb} boxSize='250px'       borderRadius='md'/>

   <ChakraLink as={ReactRouterLink} to={{pathname:`/alphabetically/recipe/${item.idMeal}`,state:{test:'hello'}}} >
  <Text>{item.strMeal}</Text></ChakraLink>
  </CardBody>
  </Card>
  </VStack>
 
  )
 })}  
       </Box>
        </HStack>
    )
}

export default ATOZ