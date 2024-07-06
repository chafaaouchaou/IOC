import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Stack,
    Radio,
    Img,
    Text,
    Box,
   
  } from '@chakra-ui/react'
    import { Button, useDisclosure } from '@chakra-ui/react'
    import { TiThMenuOutline } from 'react-icons/ti';

import React from 'react'
import ButtonStart from "./ButtonStart";
import LanguegeButton from "./LanguegeButton";
import logo from "../assets/logo.svg";

function drawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <>
                <TiThMenuOutline onClick={onOpen} className="menubergerlogo" />




        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader color={'green.400'} borderBottomWidth='1px'>Nav bar</DrawerHeader>
            <DrawerBody>
            <Img
       src={logo} width={"42px"} height={"42px"}
       display={{"sm": "none", "md": "block"}}

       />
       <Box>
           
            <Text
            cursor={"pointer"}
            _hover={{ color: "gray.500" }}
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
              cursor={"pointer"}
              color={"gray.300"}
              _hover={{ color: "gray.500" }}
            >
              Rules and Conditions
            </Text>
            <Text
              sx={{
                fontFamily: "Roboto Condensed , sans-serif",
              }}
              cursor={"pointer"}
              color={"gray.300"}
              _hover={{ color: "gray.500" }}
            >
              FAQ
            </Text>
            <Text
              sx={{
                fontFamily: "Roboto Condensed , sans-serif",
              }}
              cursor={"pointer"}
              color={"gray.300"}
              _hover={{ color: "gray.500" }}
            >
              ENG
            </Text>
            <Text
              sx={{
                fontFamily: "Roboto Condensed , sans-serif",
              }}
              color={"gray.300"}
              cursor={"pointer"}
              _hover={{ color: "gray.500" }}
            >
              START
            </Text>
       </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default drawer;
