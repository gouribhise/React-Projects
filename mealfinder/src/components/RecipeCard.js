import React,{useContext} from 'react'
import { Card, CardHeader, CardBody, Box, Stack,Text, HStack, VStack,Image, Flex,Spacer } from '@chakra-ui/react'
import MealContext from '../context/MealContext'

const RecipeCard=()=>{
    const {filteredData}=useContext(MealContext)
console.log('recipecard:',filteredData)
    return (
        <div>
           <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={4}
        ml="20vw"
       >
    {filteredData?filteredData.map((item)=>{
            return(

                <HStack w={{ md: '50%' }} justify="center" spacing={3}>            <VStack>
            <Card>
  <CardBody>
    <Image src={item.strMealThumb} boxSize='150px'       borderRadius='md'/>
    <Text>{item.strMeal}</Text>
  </CardBody>
</Card>
<Spacer />
            </VStack>

           </HStack>   




            )
            
            
        }):null}
       
      </Box>
        </div>
    )
}

export default RecipeCard