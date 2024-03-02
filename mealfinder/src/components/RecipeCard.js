import React,{useContext} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack,Text, HStack, VStack,Image, Flex,Spacer } from '@chakra-ui/react'
import MealContext from '../context/MealContext'

const RecipeCard=()=>{
    const {filteredData}=useContext(MealContext)
console.log('recipecard:',filteredData)
    return (
        <div>
<Flex
  p={{ base: 4, md: 14 }}
  w="100%"
  direction={{ base: 'column-reverse', md: 'row' }}
>     {filteredData?filteredData.map((item)=>{
            return(

                <HStack w={{ md: '35%' }} justify="center" spacing={3}>            <VStack>
            <Card>
  <CardBody>
    <Image src={item.strMealThumb}       borderRadius='lg'/>
    <Text>{item.strMeal}</Text>
  </CardBody>
</Card>
<Spacer />
            </VStack>

           </HStack>   




            )
            
            
        }):null}
        </Flex>
      
        </div>
    )
}

export default RecipeCard