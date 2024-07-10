import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import background1 from "../assets/ss.png";
import AccordionItemm from "./AccordionItemm";


const Qsection = () => {
  return (
    <Box
      backgroundImage={`url(${background1})`}
      //   backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      height={"110rem"}
    >
      <HStack marginTop={"9rem"} justifyContent={"center"}>
        <VStack>
          <Text
            padding={0}
            color={"pink.600"}
            fontSize={"20px"}
            fontWeight={"600"}
            // marginBottom={"16px"}
          >
            FAQS
          </Text>
          <Text
            color={"white"}
            fontSize={"48px"}
            fontFamily={"Hacked , sans-serif"}
            mb={"7rem"}
          >
            Frequently asked question
          </Text>
        </VStack>
      </HStack>


















      <Box display={"flex"} flexDir={"column"} alignItems={"center"} width={"auto"}  m={"0 1rem"}>

        <Box>
          <AccordionItemm 
          question="What does IOC stand for?, and what is it about?" 
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
           </Box>
        <Box>
          <AccordionItemm 
          question="What does IOC stand for?, and what is it about?" 
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
           </Box>
        <Box>
          <AccordionItemm 
          question="What does IOC stand for?, and what is it about?" 
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
           </Box>
        <Box>
          <AccordionItemm 
          question="What does IOC stand for?, and what is it about?" 
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
           </Box>
     
        
      </Box>
      
    </Box>
  );
};

export default Qsection;
