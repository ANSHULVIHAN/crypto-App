import React from 'react';
import {Avatar,Box,Stack,Text,VStack} from "@chakra-ui/react";

import img from "../assets/photo.jpg";

const Footer = () => {
  return (
    <Box
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.900"}
    minH={"48"}
    px={"16"}
    py={["16","8"]}>


    <Stack direction={['column',"row"]} h={"full"} alignItems={"center"}>
    <VStack w={"full"} alignItems={["center", "flex-start"]}>
    <Text fontWeight={"bold"}>About</Text>
    <Text 
    fontSize={"lm"}
    letterSpacing={"widest"}
    textAlign={["enter","left"]}
    >
    we are the best crypto trading app in india,we provide our guidence at very cheap price;
    </Text>
    </VStack>
    
    <VStack>
    <Avatar boxSize={"28"} mt={["4", "0"]} src={img} />
    <Text>Our Founder</Text>
  </VStack>
 </Stack>
      
    </Box>
  )
}

export default Footer;
