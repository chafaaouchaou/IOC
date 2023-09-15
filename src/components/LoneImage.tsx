import { Box, Img } from "@chakra-ui/react";

import Recap from "../assets/Recap.png";

const LoneImage = () => {
  return (
    <Box padding={"0 2rem"} color={"white"}>
      <Img src={Recap} />
    </Box>
  );
};

export default LoneImage;
