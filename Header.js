import { Button, HStack,VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <VStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
    <HStack >
    
    <Button  alignItems={"center"} colorScheme={"linkedin"} />
    <br></br>

      <Button varient={"unstyled"} color={"green"}   >
        <Link to="/">Home</Link>
        <br></br>
      </Button>

      <Button varient={"unstyled"} color={"red"}   >
      <Link to="/exchanges">Exchanges</Link>
      <br></br>
      </Button>

      <Button varient={"unstyled"} color={"blue"}   >
      <Link to="/coins">Coins</Link>
      <br></br>
      </Button>
      
    </HStack>
    </VStack>
  );
};

export default Header;
