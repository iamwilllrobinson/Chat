import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import React from 'react'

import Login from "../components/Authentication/Login"
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={1}
        bg="transparent"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="50px"
        borderWidth="3px"
        borderColor={"#DDA0DD"}
      >
        <Text fontSize="4xl" fontFamily="Plex" textAlign="center" color="#404040">
           Chat With Me.
        </Text>
      </Box>
      <Box bg="transparent" w="100%" p={4} borderRadius="50px" borderWidth="3px" borderColor={"#DDA0DD"}>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage