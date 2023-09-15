import { Box, Img } from "@chakra-ui/react";
import arrow from "../assets/arrowtoright.svg";
const ButtonStart = () => {
  return (
    <Box
      margin={"auto"}
      color={"green.500"}
      bg="none"
      border="2px"
      borderRadius={0}
      width={"fit-content"}
      padding={"10px 24px"}
      fontWeight={"medium"}
      fontSize={"24px"}
      display={"flex"}
      alignItems={"center"}
      transition={"all 0.2s ease-in-out"}
      cursor={"pointer"}
      _hover={{
        bg: "Alphagreen.500 ",
      }}
      sx={{
        fontFamily: "Roboto Condensed , sans-serif",
      }}
    >
      START
      <Img
        src={arrow}
        alt="Right Icon"
        marginLeft={"8px"}
        width="24px"
        height="24px"
      />
    </Box>
  );
};

export default ButtonStart;
