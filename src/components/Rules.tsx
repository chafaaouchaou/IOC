import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";

import eay from "../assets/eays.svg";
import inconeto from "../assets/inconeto.svg";
import menu from "../assets/menu.svg";
import profile from "../assets/profile.svg";
import share from "../assets/share.svg";
import time from "../assets/time.svg";

import doctor from "../assets/doctor.png";
import dron from "../assets/Frame 489.png";

const Rules = () => {
  return (
    <Box overflow={"hidden"} bg={"black"} mb={"8rem"}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text
          mt={{
            base: '0',
            sm: '0',
            md: '0',
            lg: '13rem'

          }}
          color={"white"}
          fontSize={"48px"}
          fontFamily={"Hacked , sans-serif"}
          mb={"2rem"}
        >
          Rules and conditions
        </Text>
      </Box>
      <Grid templateRows={ {base:'repeat(2, 1fr)',sm: 'repeat(2, 1fr)',md: 'repeat(2, 1fr)', lg: '1fr'}}  templateColumns={{sm: '1fr', md: '1fr', lg: '1fr 1fr' }}  position={"relative"} left={{ md: '0', lg: "-6.6rem"}}>
        <GridItem color={"white"} >
          <Box display={
            {base: 'flex',
            sm: 'flex',
            md: 'flex'

            }
          }
          justifyContent={{
            base: 'center',
            sm: 'center',
            md: 'center'
          }} 
        
          
          
          
          >
            <Img  src={doctor} 
            width={
                     {    base: '600px',
               'sm': '600px',
               'md': '600px',
               'lg': '500px',
               '2lg': '600px',
               'xl': '600px',
                '2xl': '600px'}
              }
              ml={{
                base: '10rem',
                'sm': '7rem',
                "2sm": '0rem',
                'md': '0rem',
                'lg': '50rem',
                '2lg': '5rem',
                'xl': '5rem',
                 '2xl': '5rem'
            
              }}
              mt={{
              base : '5rem',
              sm: '5rem',
              md: '5rem',
              lg: '10rem',
              '2lg': '5rem',
              xl: '5rem',
                '2xl': '5rem'
                

              }}
              position={"absolute"} />
          </Box>
        </GridItem>
        <GridItem
        ml={{
          base: '0',
          'sm': '0',
          'md': '0',
          'lg': '40rem',
          '2lg': '0',
          'xl': '0',
           '2xl': '0'
        }}
        
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} m={"0 auto"}
          
          >
            <Img width={"210px"} src={profile}  
            ml={{
              base: '8rem',
              'sm': '4rem',
              "2sm": '0rem',
              'md': '0rem',
              'lg': '0rem',
              '2lg': '0rem',
              'xl': '0rem',
               '2xl': '0rem'
            }} 
            />
            <Text
              lineHeight={"30px"}
              width={{
                base: "50%",
                sm: "50%",
                md: "70%",
                lg: "100%",
                '2lg': "100%",
                xl: "100%",
                 '2xl': "100 "

              }}
              fontSize={"24px"}
              color={"white"}
             

            >
              Make sure you register for the event and respect all of the
              previously stated regulations.
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Img 
            ml={{
              base: '8rem',
              'sm': '4rem',
              "2sm": '0rem',
              'md': '0rem',
              'lg': '0rem',
              '2lg': '0rem',
              'xl': '0rem',
               '2xl': '0rem'
            }} 
            
            width={"210px"} src={inconeto} />
            <Text
               lineHeight={"30px"}
               width={{
                 base: "50%",
                 sm: "50%",
                 md: "70%",
                 lg: "100%",
                 '2lg': "100%",
                 xl: "100%",
                  '2xl': "100 "
 
               }}
               fontSize={"24px"}
               color={"white"}
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Img
            ml={{
              base: '8rem',
              'sm': '4rem',
              "2sm": '0rem',
              'md': '0rem',
              'lg': '0rem',
              '2lg': '0rem',
              'xl': '0rem',
               '2xl': '0rem'
            }} 
            width={"210px"} src={time} />
            <Text
              lineHeight={"30px"}
              width={{
                base: "50%",
                sm: "50%",
                md: "70%",
                lg: "100%",
                '2lg': "100%",
                xl: "100%",
                 '2xl': "100 "

              }}
              fontSize={"24px"}
              color={"white"}
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
          </Box>
        </GridItem>
      </Grid>


{/* hhhhhhhhhhhhhhhhhhhhhhhh */}
      <Grid  templateRows={ {base:'repeat(2, 1fr)',sm: 'repeat(2, 1fr)',md: 'repeat(2, 1fr)', lg: '1fr'}}  templateColumns={{sm: '1fr', md: '1fr', lg: '1fr 1fr' }} position={"relative"} right={{ md: '0', lg: "-6.6rem"}}>
        <GridItem position={"relative"}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} m={"0 auto"}>
            <Text
               lineHeight={"30px"}
               width={{
                 base: "50%",
                 sm: "50%",
                 md: "70%",
                 lg: "100%",
                 '2lg': "100%",
                 xl: "100%",
                  '2xl': "100 "
 
               }}
               fontSize={"24px"}
               color={"white"}
               ml={{
                base: '15rem',
                'sm': '10rem',
                "2sm": '0rem',
                'md': '0rem',
                'lg': '0rem',
                '2lg': '0rem',
                'xl': '0rem',
                 '2xl': '0rem'
              }} 
              
            >
              Make sure you register for the event and respect all of the
              previously stated regulations.
            </Text>
            <Img 
            width={"210px"} src={menu}
           
            />

          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
                lineHeight={"30px"}
                width={{
                  base: "50%",
                  sm: "50%",
                  md: "70%",
                  lg: "100%",
                  '2lg': "100%",
                  xl: "100%",
                   '2xl': "100 "
  
                }}
                fontSize={"24px"}
                color={"white"}
                ml={{
                  base: '15rem',
                  'sm': '10rem',
                  "2sm": '0rem',
                  'md': '0rem',
                  'lg': '0rem',
                  '2lg': '0rem',
                  'xl': '0rem',
                   '2xl': '0rem'
                }} 
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
            <Img width={"210px"} src={eay} />
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
               lineHeight={"30px"}
               width={{
                 base: "50%",
                 sm: "50%",
                 md: "70%",
                 lg: "100%",
                 '2lg': "100%",
                 xl: "100%",
                  '2xl': "100 "
 
               }}
               fontSize={"24px"}
               color={"white"}
               ml={{
                base: '15rem',
                'sm': '10rem',
                "2sm": '0rem',
                'md': '0rem',
                'lg': '0rem',
                '2lg': '0rem',
                'xl': '0rem',
                 '2xl': '0rem'
              }} 
            >
              Do not touch the platform or conduct any sort of attack on it.
            </Text>
            <Img width={"210px"} src={share} />
          </Box>
        </GridItem>

        <GridItem>
        <Box display={
            {base: 'flex',
            sm: 'flex',
            md: 'flex'

            }
          }
          justifyContent={{
            base: 'center',
            sm: 'center',
            md: 'center'
          }} 
        
          
          
          
          >

          <Img
         src={dron} width={"550px"} position={"absolute"}
           
           ml={{
            base: '10rem',
            'sm': '7rem',
            "2sm": '0rem',
            'md': '0rem',
            'lg': '50rem',
            '2lg': '5rem',
            'xl': '5rem',
             '2xl': '5rem'
        
          }}
          mt={{
          base : '5rem',
          sm: '5rem',
          md: '5rem',
          lg: '10rem',
          '2lg': '5rem',
          xl: '5rem',
            '2xl': '5rem'
            

          }}
           />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Rules;
