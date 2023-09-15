import { Button } from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci/";
const LanguegeButton = () => {
  return (
    <Button
      fontSize={"20px"}
      color={"gray.300"}
      border={"1px"}
      borderColor={"gray.300"}
      leftIcon={<CiGlobe />}
      bg={"none"}
      borderRadius={"20px"}
      iconSpacing={"8px"}
      padding={" 6px 12px"}
      _hover={{}}
      sx={{
        fontFamily: "Roboto Condensed , sans-serif",
      }}
      fontWeight={"regular"}
    >
      ENG
    </Button>
  );
};

export default LanguegeButton;
