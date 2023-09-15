import { Box, Text, Img } from "@chakra-ui/react";

import ButtonStartOnly from "./ButtonStartonly";
import arrowdown from "../assets/arrowdown.svg";
import callendar from "../assets/callendar.svg";
import location from "../assets/location.svg";

const HeroSection = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      width={"fit-content"}
      textAlign={"center"}
      sx={{
        fontFamily: "Roboto Condensed , sans-serif",
      }}
    >
      <Text
        mt={"88px"}
        padding={0}
        color={"pink.600"}
        fontSize={"20px"}
        fontWeight={"600"}
        marginBottom={"16px"}
      >
        IMPACT OF CODE
      </Text>
      <Text
        fontSize={"112.26px"}
        color={"white"}
        sx={{
          fontFamily: "Hacked , sans-serif",
          lineHeight: "0.9",
        }}
        marginBottom={"16px"}
      >
        Save the world from Apocalypse
      </Text>
      <Text
        fontWeight={"500"}
        color={"green.500"}
        fontSize={"32px"}
        sx={{
          fontFamily: "Monomaniac One , sans-serif",
        }}
        marginBottom={"32px"}
      >
        16 AUGUST 2023
      </Text>

      <ButtonStartOnly />
      <Img src={arrowdown} margin={"auto"} mt={"48px"} />

      <Text mt={"10px"} color={"green.500"}>
        SCROLL TO EXPLOR
      </Text>

      {/*
       */}

      <Text
        mt={"40rem"}
        padding={0}
        color={"pink.600"}
        fontSize={"20px"}
        fontWeight={"600"}
        marginBottom={"16px"}
      >
        THE EVENT
      </Text>
      <Text
        fontSize={"64px"}
        color={"white"}
        sx={{
          fontFamily: "Hacked , sans-serif",
          lineHeight: "0.9",
        }}
        marginBottom={"16px"}
      >
        IMPACT OF CODE
      </Text>

      <Box margin={"auto"} m={"0px auto"}>
        <Text textAlign={"center"} mt={"00px"} color={"white"} maxW={"40rem"}>
          Impact of code is a one-week-long dev event that consists of daily
          coding challenges wrapped up in a story scenario under the theme of an
          apocalyptic world (prequel to last year’s story) in which we follow
          the steps of a character as he solves his way to escape the end.
        </Text>
      </Box>
      <Box margin={"auto"} m={"16px auto "}>
        <Text textAlign={"center"} mt={"0px"} color={"white"} maxW={"40rem"}>
          Each day participants will discover a new primary challenge and a
          bonus challenge with a chance to win points after solving each one.
        </Text>
      </Box>
      <Box m={"0 auto"} display={"flex"}>
        <Box display={"flex"}>
          <Img mr={"8px"} src={location} width={"22px"} height={"22px"} />
          <Text mr={"24px"} color={"green.500"}>
            ONLINE
          </Text>
        </Box>

        <Box display={"flex"}>
          <Img mr={"8px"} src={callendar} width={"22px"} height={"22px"} />
          <Text color={"green.500"}>16 AUGUST 2023</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
