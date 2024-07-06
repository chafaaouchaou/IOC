import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import background1 from "../assets/greenback.svg";
import background2 from "../assets/smallgreenback.svg";
import background3 from "../assets/bg3.svg";

const Goodshape = () => {
  return (
    <Box
      // m={"0 2rem 0 7.5rem"}
      bg={"black"}
      backgroundImage={`url(${background1})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"   center"}
      height={"35rem"}
      sx={{
        backgroundSize: "100% auto",
      }}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          w="100%"
          h="34.5rem"
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              // fontSize={"81px"}
              fontSize={{ base: '24px',"2sm": '34', md: '40px', lg: '51px',  xl : '81px' }}
              color={"white"}
              sx={{
                fontFamily: "Hacked , sans-serif",
                lineHeight: "0.9",
              }}
              marginBottom={"16px"}
            >
              7 DAYS,
              <br /> 14 CHALLENGES, <br /> ONE HERO,
            </Text>
            <Text
              fontSize={{ base: '24px', md: '40px', lg: '51px',  xl : '81px' }}
              color={"green.500"}
              sx={{
                fontFamily: "Hacked , sans-serif",
                lineHeight: "0.9",
              }}
              marginBottom={"16px"}
            >
              You!
            </Text>
          </Box>
        </GridItem>

        <GridItem
          display={"flex"}
          flexDirection={"column"}
          w="100%"

          justifyContent={"center"}
        >
          <Grid
            templateRows="repeat(2, 1fr)"
            gap={{ base: 0, sm:0, md: 0, lg: 6,  xl : 6 }}
          >
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              w="100%"
              // h="200px"
              backgroundImage={`url(${background2})`}
              // backgroundSize={""}
              backgroundRepeat={"no-repeat"}
              sx={{
                backgroundSize: "80% 95%",
              }}
            >
              <Text
                color={"white"}
                // fontSize={"24px"}
                // fontSize={{ base: '24px', md: '24px', '1052px': '24px',  xl : '24px' }}
                fontSize={{ base: '14px', sm:'10px',"2sm": '12', md: '17px', lg: '20px',  xl : '24px' }}

                // p={"0 2rem"}
                padding={{ base: '0 1rem',sm: '0 1rem 0 1rem', md: '0 0rem', lg: '0 1rem 0 1rem ',  xl : '0 0rem' }}

                mb={"1rem"}
                // mr={"8rem"}
                mr={{ base: '5rem', sm :'4rem',md: '5rem', lg: '8rem',  xl : '8rem' }}

              >
                Impact of Code features{" "}
                <span style={{ color: "#00ff84" }}>14 challenges</span> of{" "}
                <br />
                different techniques and difficulties
              </Text>





              
            </GridItem>


            
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              w="100%"
              h={{ base: "150px", sm: "150px", md: "200px", lg: "200px",  xl : "200px" }}
              // bg="blue.200"
              backgroundImage={`url(${background3})`}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              sx={{
                backgroundSize: " 80% 95%",
              }}
            >
              <Text
                color={"white"}
                // fontSize={"20px"}
                fontSize={{ base: '12px', md: '15px', lg: '18px',  xl : '24px' }}
                
                
                // p={"0 4.5rem"}
                mb={"1rem"}
                // mr={""}
                mr={{ base: '0', md: '2rem', lg: '3rem',  xl : '8rem' }}

                padding={{ base: '0 6rem 0 1rem', md: '0 04rem 0 1rem', lg: '0 5rem 0 2rem',  xl : '0 4.5rem' }}
              >
                You don’t have to be a computer science student to solve them
                but you need to have a base knowledge in{" "}
                <span style={{ color: "#00ff84" }}>algorithms</span> and{" "}
                <span style={{ color: "#00ff84" }}>data structures</span>
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Goodshape;
