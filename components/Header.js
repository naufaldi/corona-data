import React from "react";
import { Box, Heading, Flex, Text, Button,Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/core";
import Link from 'next/link'

const MenuItems = ({ children, link }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    <Link href={`/${link}`}>
      <a> {children}</a>
    </Link>
  </Text>
);

const MenuDropDown = () => (
  <Menu>
  <MenuButton rightIcon="chevron-down">
    Sumber Lain
  </MenuButton>
  <MenuList>
    <MenuItem>CDC</MenuItem>
    <MenuItem>Kemenkes RI</MenuItem>
    <MenuItem>WHO</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem as="a" href="#">
      Attend a Workshop
    </MenuItem>
  </MenuList>
</Menu>
)

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="white"
      color="black"
      borderBottomWidth="1px"
      position="fixed"
      w="100%"
      zIndex="4"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Corona Pusat Data
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems link={'docs'}> Pencegahan</MenuItems>
        <MenuItems link={'example'}>Hotline</MenuItems>
        <MenuItems link={'blog'}> Pamflet</MenuItems>
        <MenuDropDown></MenuDropDown>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button >
        Toggle 
      </Button>
      </Box>
    </Flex>
  );
};

export default Header;
