import { Box } from "@chakra-ui/react";
const ButtonStartOnly = () => {
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
    </Box>
  );
};

export default ButtonStartOnly;
