import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
//import btcSrc from "../assets/logo.png.jpg";
//import {} from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"pink"} w={"full"} h={"80vh"}>
      <div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          //src={btcSrc}
          
          filter={"grayscale(1)"}
        />
      </div>

      <Text
        fontSize={"4xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"black"}
        mt={"-20"}
        colorScheme={"linkedin"} 
        textColor={"blackAlpha.900"}
      >
      Xcrypto App by   anshul.com
     </Text>

     <Text  Xcrypto  />


    </Box>
  );
};

export default Home;
