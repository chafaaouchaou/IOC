import { Box, HStack, Text, VStack, Img } from "@chakra-ui/react";

import background1 from "../assets/ss.png";
import twoarrows from "../assets/twoarrows.svg";
import line from "../assets/Line.svg";

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

      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Box>
          <Box marginLeft={"1.5rem"} display={"flex"} cursor={"pointer"}>
            <Img marginRight={"10px"} src={twoarrows} />
            <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
              What does IOC stand for?, and what is it about?
            </Text>
          </Box>
          <img src={line} alt="" />
        </Box>

        <Box>
          <Box marginLeft={"1.5rem"} display={"flex"} cursor={"pointer"}>
            <Img marginRight={"10px"} src={twoarrows} />
            <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
              What does IOC stand for?, and what is it about?
            </Text>
          </Box>
          <img src={line} alt="" />
        </Box>

        <Box>
          <Box marginLeft={"1.5rem"} display={"flex"} cursor={"pointer"}>
            <Img marginRight={"10px"} src={twoarrows} />
            <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
              What does IOC stand for?, and what is it about?
            </Text>
          </Box>
          <img src={line} alt="" />
        </Box>

        <Box>
          <Box marginLeft={"1.5rem"} display={"flex"} cursor={"pointer"}>
            <Img marginRight={"10px"} src={twoarrows} />
            <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
              What does IOC stand for?, and what is it about?
            </Text>
          </Box>
          <img src={line} alt="" />
        </Box>

        <Box>
          <Box marginLeft={"1.5rem"} display={"flex"} cursor={"pointer"}>
            <Img marginRight={"10px"} src={twoarrows} />
            <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
              What does IOC stand for?, and what is it about?
            </Text>
          </Box>
          <img src={line} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Qsection;
