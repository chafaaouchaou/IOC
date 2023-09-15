import { Box, Grid, GridItem, Text, Img, HStack } from "@chakra-ui/react";

import mc from "../assets/mc-logo.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import discord from "../assets/discord.svg";
import link from "../assets/link.svg";
import facebook from "../assets/facebook.svg";

import LanguegeButton from "./LanguegeButton";

const Footer = () => {
  return (
    <Box
      fontFamily={"Roboto Condensed ,  sans-serif"}
      padding={"0 5rem"}
      color={"white"}
    >
      <Grid templateColumns={"1fr 1fr"}>
        <GridItem display={"flex"} flexDir={"column"}>
          <HStack mb={"1rem"}>
            <Text mr={"1rem"}>POWERED BY</Text>
            <Img width={"94px"} src={mc} />
          </HStack>
          <Text maxW={"450px"} mb={"1rem"}>
            Micro Club{" "}
            <span
              style={{
                color: "#c9c9c9",
              }}
            >
              is the first founded scientific club in Algeria, back in March
              5th, 1985. We focus on Computer Science and IT field as we work to
              popularize among the student community.
            </span>
          </Text>
          <Text>microclub.contact@gmail.com</Text>
          <HStack mb={"5rem"} mt={"1rem"}>
            <Img mr={".5rem"} src={facebook} />
            <Img mr={".5rem"} src={linkedin} />
            <Img mr={".5rem"} src={instagram} />
            <Img mr={".5rem"} src={discord} />
            <Img mr={".5rem"} src={link} />
          </HStack>
        </GridItem>
        <GridItem
          //   mr={"2rem"}
          //   alignSelf={"end"}
          justifySelf={"end"}
          display={"flex"}
          flexDir={"column"}
        >
          <Text
            sx={{
              fontFamily: "Roboto Condensed , sans-serif",
            }}
            color={"white"}
            mb={"1rem"}
            cursor={"pointer"}
          >
            The Event
          </Text>
          <Text
            sx={{
              fontFamily: "Roboto Condensed , sans-serif",
            }}
            color={"white"}
            mb={"1rem"}
            cursor={"pointer"}
          >
            Rules and Conditions
          </Text>
          <Text
            sx={{
              fontFamily: "Roboto Condensed , sans-serif",
            }}
            color={"white"}
            mb={"1rem"}
            cursor={"pointer"}
          >
            FAQ
          </Text>

          <Box width={"20px"}>
            <LanguegeButton />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
