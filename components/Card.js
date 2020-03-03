import React from "react";
import {
  Box,
  Text,
  Heading,
  Link as LinkChakra,
  Image,
  Icon
} from "@chakra-ui/core";
import Link from "next/link";
function Card(props) {
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        backgroundColor="white"
        margin="1rem"
      >
        <Image src={props.img} altImg={props.altImg} w="100%" maxH="16rem" height="auto" ></Image>
        <Box p="6">
          <Heading as="h2" size="md" mb="4">
            <Link
              href={props.href}
              // as={props.href}
            >
              <a>{props.heading}</a>
            </Link>
          </Heading>
          <Text mb="4" textAlign="justify">
           {props.text}
          </Text>
        </Box>
        <Box
          borderTop="1px solid"
          borderColor="gray.200"
          px="6"
          py="3"
          display="flex"
          justifyContent="flex-end"
        >
          <LinkChakra>
            <Link href={props.href} 
            // as="/info-dasar/penyebaran"
            >
              <a>
                Baca Lengkap <Icon name="arrow-forward" mx="2px" />
              </a>
            </Link>
          </LinkChakra>
        </Box>
      </Box>
    </>
  );
}

export default Card;
