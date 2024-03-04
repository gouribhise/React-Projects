import React from "react";
 import { Link as ReactRouterLink,Outlet} from 'react-router-dom'
import { Link as ChakraLink, HStack, Heading, LinkProps } from '@chakra-ui/react'
const Layout = () => {
  return (
    <>
      
      
        <HStack spacing="125px">
        <Heading p="24px">Meal Finder</Heading>

        <ChakraLink as={ReactRouterLink} to='/'>
  Home
</ChakraLink>

<ChakraLink as={ReactRouterLink} to='/alphabetically'>
  A-Z
</ChakraLink>
<ChakraLink as={ReactRouterLink} to='/random'>
  Random
</ChakraLink>
 
        </HStack>
      

      <Outlet />
    </>
  );
};

export default Layout;