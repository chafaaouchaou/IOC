import { useState, useEffect } from "react";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import "./App.css";

import background1 from "./assets/Background1.png";

import Navbar from "./components/Navbar";
import Goodshape from "./components/Goodshape";
import HeroSection from "./components/HeroSection";
import Rules from "./components/Rules";
import Khsection from "./components/Khsection";
import Qsection from "./components/Qsection";
import LoneImage from "./components/LoneImage";
import Footer from "./components/Footer";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth >= 1228 ? (
        <Box
          bg={"black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box maxW={"1440px"}>
            <Navbar />
            <Box
              bg={"black"}
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              backgroundImage={`url(${background1})`}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
            >
              <HeroSection />
            </Box>
            <Box marginTop={"9rem"}>
              <Goodshape />
            </Box>
            <Box>
              <Rules />
            </Box>
            <Box>
              <LoneImage />
            </Box>
            <Box>
              <Khsection />
            </Box>
            <Box>
              <Qsection />
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box bg={"black"} h={"100vw"}>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>
              Your browser has to be 1220px wide or higher.
            </AlertTitle>
            <AlertDescription>
              The developer of this website was too lazy to make the website
              responsive.
            </AlertDescription>
          </Alert>
        </Box>
      )}
    </>
  );
}

export default App;
