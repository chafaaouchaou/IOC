import { HStack, Img, Text,Box } from "@chakra-ui/react";

import ButtonStart from "./ButtonStart";
import LanguegeButton from "./LanguegeButton";
import logo from "../assets/logo.svg";
// import { useEffect, useState } from "react";
import  Drawer from "./Drawer";

const Navbar = () => {


  return (
    <>
    {/* {screenWidth >= 780 ? ( */}
    <HStack
      margin={"0 0 0 0"}
      padding={{
        base: "24px 0",
        md: "24px 84px",
        
      }}
      align={"center"}
      height={"92px"}
      bg={"black"}
      justify={"space-between"}
    >
      <Img
       src={logo} width={"42px"} height={"42px"}
       display={{"sm": "none", "md": "block"}}
       />

      <HStack display={{"sm": "none", "md": "flex"}}      spacing={"62px"}> 
        <Text
          sx={{
            fontFamily: "Roboto Condensed , sans-serif",
          }}
          color={"gray.300"}
        >
          The Event
        </Text>
        <Text
          sx={{
            fontFamily: "Roboto Condensed , sans-serif",
          }}
          color={"gray.300"}
        >
          Rules and Conditions
        </Text>
        <Text
          sx={{
            fontFamily: "Roboto Condensed , sans-serif",
          }}
          color={"gray.300"}
        >
          FAQ
        </Text>

        <LanguegeButton />
        <ButtonStart />
      </HStack>

      <Box color={"green.400"} className="menuberger"
      display={{"sm": "block", "md": "none"}}
      >
        <Drawer/>
      </Box>
    </HStack>
          
    </>
  );
};

export default Navbar;
