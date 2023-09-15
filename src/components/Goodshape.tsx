import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import background1 from "../assets/greenback.svg";
import background2 from "../assets/smallgreenback.svg";
import background3 from "../assets/bg3.svg";

const Goodshape = () => {
  return (
    <Box
      margin={"0 34px "}
      //   bg={"red"}
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
          //   flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          w="100%"
          h="34.5rem"
          //   border={"1px"}
          //   borderColor={"red.500"}
        >
          <Box
            // bg={"red"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Text
              fontSize={"81px"}
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
              fontSize={"81px"}
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
          h="34.5rem"
          // border={"1px"}
          // borderColor={"red.500"}
          justifyContent={"center"}
        >
          <Grid
            // marginTop={"5rem"}
            templateRows="repeat(2, 1fr)"
            gap={6}
          >
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              w="100%"
              h="200"
              // bg="blue.200"
              backgroundImage={`url(${background2})`}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              // backgroundPosition={"   center"}
              sx={{
                backgroundSize: "80% 95%",
              }}
            >
              <Text
                color={"white"}
                fontSize={"24px"}
                p={"0 2rem"}
                mb={"1rem"}
                mr={"8rem"}
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
              h="200"
              // bg="blue.200"
              backgroundImage={`url(${background3})`}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              // backgroundPosition={"   center"}
              sx={{
                backgroundSize: "80% 95%",
              }}
            >
              <Text
                color={"white"}
                fontSize={"20px"}
                p={"0 4.5rem"}
                mb={"1rem"}
                mr={"8rem"}
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
