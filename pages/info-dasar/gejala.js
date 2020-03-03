import React from "react";
import Head from "next/head";
import AppLayout from "../../components/Layout";
import { Box, Heading, Text, Flex, List, ListItem, Link as LinkChakra } from "@chakra-ui/core";
import Link from "next/link";

const Gejala = () => {
  return (
    <>
      <Head>
        <title>Gejala COVID-19</title>
      </Head>
      <AppLayout>
        <Flex>
          <Box
            flex="3"
            borderWidth="1px"
            overflow="hidden"
            p="6"
            mr="4"
            backgroundColor="white"
          >
            <Heading fontSize="3xl" mb="4">
              Gejala COVID-19
            </Heading>
            <Text>
            Gejala umum berupa : 
            </Text>
            <Box>
            <List styleType="disc">
                <ListItem>
                demam ≥380C
                </ListItem>
                <ListItem>
                batuk
                </ListItem>
                <ListItem>
                  pilek
                </ListItem>
                <ListItem>
                nyeri tenggorokan 
                </ListItem>
                <ListItem>
                sesak napas.
                </ListItem>
              </List>
              <Text>
              Jika ada orang dengan gejala tersebut pernah melakukan perjalanan ke China (terutama Wuhan), atau pernah merawat/kontak dengan penderita 2019-nCoV, maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih lanjut untuk memastikan diagnosisnya.
              </Text>
             
              
            </Box>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
            Sumber : <Link href="http://infeksiemerging.kemkes.go.id/situasi-infeksi-emerging/info-corona-virus/tanya-jawab-novel-coronavirus-2019-ncov-faq-update-4-februari-2020/#Bagaimana_manusia_bisa_terinfeksi_Novel_Coronavirus">
              <LinkChakra>
                <a>Infeksi Emerging, Kemenkes RI</a>
              </LinkChakra>
            </Link>
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            Date :  3 Maret 2020
          </Box>
          </Box>
          <Box flex="1">sidebar</Box>
        </Flex>
      </AppLayout>
    </>
  );
};

export default Gejala;
