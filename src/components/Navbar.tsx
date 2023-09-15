import { HStack, Img, Text } from "@chakra-ui/react";

import ButtonStart from "./ButtonStart";
import LanguegeButton from "./LanguegeButton";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <HStack
      margin={"0 0 0 0"}
      padding={"24px 84px"}
      align={"center"}
      height={"92px"}
      bg={"black"}
      justify={"space-between"}
    >
      <Img src={logo} width={"42px"} height={"42px"} />

      <HStack spacing={"62px"}>
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
    </HStack>
  );
};

export default Navbar;
