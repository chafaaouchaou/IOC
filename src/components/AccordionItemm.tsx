import { useState } from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import twoarrows from "../assets/twoarrows.svg";
import line from "../assets/Line.svg";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem : React.FC<AccordionItemProps>= ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Box>
        <Box marginLeft={"1.5rem"} display={"flex"} flexDirection={"column"} onClick={toggleAccordion} cursor={"pointer"}>
          <Box display={"flex"} alignItems={"center"}>
            <Image 
              marginRight={"10px"} 
              src={twoarrows} 
              transform={isOpen ? 'rotate(90deg)' : 'rotate(0deg)'} 
              transition={"transform 0.2s ease-in-out"}
            />
            <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
              {question}
            </Text>
          </Box>
          <Text 
            maxW={"50rem"} 
            overflow={"hidden"} 
            height={isOpen ? "auto" : "0"} 
            transition={"height 0.2s ease-in-out, opacity 0.2s ease-in-out"} 
            opacity={isOpen ? 1 : 0}
          >
            {answer}
          </Text>
        </Box>
        <Image src={line} alt="" />
      </Box>
    );
  };
  
  export default AccordionItem