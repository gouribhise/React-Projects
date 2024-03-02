import React,{useContext} from 'react'
import MealContext from '../context/MealContext'
import { Badge, Stack,Button, filter } from '@chakra-ui/react'
const Categories=()=>{
    const {categories,filterByCat,filteredData}=useContext(MealContext)
       return(
        <div>
<Stack direction='row' spacing="25px"  ml="130px" mt="50px">        {categories.map((item)=>{
            return(

                <Button colorScheme='red' variant='solid'
                
                onClick={()=>filterByCat(`${item.strCategory}`)}
                >{item.strCategory}</Button>

            )
            
            
        })}
        </Stack>

        </div>
    )
}

export default Categories