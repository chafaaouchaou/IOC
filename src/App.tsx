import { useState, useEffect } from "react";
import { Alert, AlertIcon, Box, Text } from "@chakra-ui/react";
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
  const minWidth = 660;

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
      {/* Vérifie si la largeur de l'écran est inférieure à 660px */}
      {screenWidth < minWidth && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0,0 , 0.7)" // Couleur de fond sombre semi-transparente
          zIndex="9999" // Assure que le message est au-dessus de tout
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Alert
            status="warning"
            bg="white"
            borderRadius="md"
            maxW="90%"
            textAlign="center"
            p={4}
          >
            <AlertIcon />
            <Text fontSize="lg" fontWeight="bold">
              This website requires a screen width of at least 660px for optimal display.
            </Text>
            <Text fontSize="md">
              Please resize your window or use a larger device.
            </Text>
          </Alert>
        </Box>
      )}

      <Box
        // Applique un flou au contenu si l'écran est inférieur à 660px
        filter={screenWidth < minWidth ? "blur(5px)" : "none"}
        transition="filter 0.3s ease" // Transition douce pour le flou
        bg={"black"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight="100vh" // S'assure que la hauteur est de 100% de la fenêtre
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
            minHeight="100vh" // S'assure que la hauteur est de 100% de la fenêtre
          >
            <HeroSection />
          </Box>
          

          <Box bg={"black"} >
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
    </>
  );
}

export default App;
