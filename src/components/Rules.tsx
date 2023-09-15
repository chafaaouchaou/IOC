import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";

import eay from "../assets/eays.svg";
import inconeto from "../assets/inconeto.svg";
import menu from "../assets/menu.svg";
import profile from "../assets/profile.svg";
import share from "../assets/share.svg";
import time from "../assets/time.svg";

import doctor from "../assets/doctor.png";
import dron from "../assets/Frame 489.png";

const Rules = () => {
  return (
    <Box overflow={"hidden"} bg={"black"} mb={"8rem"}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text
          mt={"13rem"}
          color={"white"}
          fontSize={"48px"}
          fontFamily={"Hacked , sans-serif"}
          mb={"2rem"}
        >
          Rules and conditions
        </Text>
      </Box>
      {/* <Img src={dron} /> */}
      <Grid templateColumns=" 1fr 1fr" position={"relative"} left={"-6.6rem"}>
        <GridItem color={"white"}>
          <Img mt={"5rem"} src={doctor} width={"600px"} position={"absolute"} />
        </GridItem>
        <GridItem>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Img width={"210px"} src={profile} />
            <Text
              lineHeight={"30px"}
              width={"35rem"}
              fontSize={"24px"}
              color={"white"}
            >
              Make sure you register for the event and respect all of the
              previously stated regulations.
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Img width={"210px"} src={inconeto} />
            <Text
              lineHeight={"30px"}
              width={"35rem"}
              fontSize={"24px"}
              color={"white"}
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Img width={"210px"} src={time} />
            <Text
              lineHeight={"30px"}
              width={"35rem"}
              fontSize={"24px"}
              color={"white"}
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
          </Box>
        </GridItem>
      </Grid>

      <Grid templateColumns=" 1fr 1fr" position={"relative"} right={"-6.6rem"}>
        <GridItem position={"relative"}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
              lineHeight={"30px"}
              width={"35rem"}
              fontSize={"24px"}
              color={"white"}
            >
              Make sure you register for the event and respect all of the
              previously stated regulations.
            </Text>
            <Img width={"210px"} src={menu} />
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
              lineHeight={"30px"}
              width={"35rem"}
              fontSize={"24px"}
              color={"white"}
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
            <Img width={"210px"} src={eay} />
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
              lineHeight={"30px"}
              width={"35rem"}
              fontSize={"24px"}
              color={"white"}
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
            <Img width={"210px"} src={share} />
          </Box>
        </GridItem>

        <GridItem>
          <Img mt={"5rem"} src={dron} width={"550px"} position={"absolute"} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Rules;
