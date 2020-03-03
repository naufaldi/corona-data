import React from "react";
import Head from "next/head";
import AppLayout from "../../components/Layout";
import { Box, Heading, Text, Flex, List, ListItem, Link as LinkChakra } from "@chakra-ui/core";
import Link from "next/link";

const Penyebaran = () => {
  return (
    <>
      <Head>
        <title>Penyebaran COVID-19</title>
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
              Cara Penyebaran COVID-19
            </Heading>
            <Text>
              Pemahaman saat ini tentang bagaimana virus yang menyebabkan
              penyakit coronavirus 2019 (COVID-19) menyebar sebagian besar
              didasarkan pada apa yang diketahui tentang coronavirus yang
              serupa. COVID-19 adalah penyakit baru dan masih banyak yang harus
              dipelajari tentang penyebarannya, tingkat keparahan penyakit yang
              ditimbulkannya, dan sejauh mana penyebarannya di Amerika Serikat.
            </Text>
            <Box>
              <Heading fontSize="xl">Penyebaran orang ke orang</Heading>
              <Text>
                Virus ini diperkirakan menyebar terutama dari orang ke orang.
              </Text>
              <List styleType="disc">
                <ListItem>
                  Antara orang yang berada dalam kontak dekat satu sama lain
                  (dalam jarak sekitar 6 kaki).
                </ListItem>
                <ListItem>
                  Melalui tetesan pernapasan yang dihasilkan ketika orang yang
                  terinfeksi batuk atau bersin.
                </ListItem>
              </List>
              <Text>
                Tetesan ini dapat mendarat di mulut atau hidung orang-orang yang
                berada di dekatnya atau mungkin terhirup ke dalam paru-paru.
              </Text>
              <Heading fontSize="xl" mb="4">
                Menyebar dari kontak dengan permukaan atau benda yang terinfeksi
              </Heading>
              <Text>
                Mungkin saja seseorang bisa mendapatkan COVID-19 dengan
                menyentuh permukaan atau benda yang memiliki virus di atasnya
                dan kemudian menyentuh mulut, hidung, atau mata mereka sendiri,
                tetapi ini tidak dianggap sebagai cara utama virus menyebar.
              </Text>
              <Heading fontSize="xl" mb="4">
                Dapatkah seseorang menyebarkan virus tanpa sakit?
              </Heading>
              <List styleType="disc" mb="4">
                <ListItem>
                  Orang-orang dianggap paling menular ketika mereka paling
                  bergejala (yang paling sakit)..
                </ListItem>
                <ListItem>
                  Beberapa penyebaran mungkin terjadi sebelum orang menunjukkan
                  gejala; sudah ada laporan tentang hal ini terjadi dengan
                  coronavirus baru ini, tetapi ini tidak dianggap sebagai cara
                  utama penyebaran virus.
                </ListItem>
              </List>
              <Heading fontSize="xl" mb="4">
                Seberapa mudah virus menyebar?
              </Heading>
              <Text>
                Seberapa mudah virus menyebar dari orang ke orang dapat
                bervariasi. Beberapa virus sangat menular (menyebar dengan
                mudah), seperti campak, sementara virus lain tidak menyebar
                dengan mudah. Faktor lain adalah apakah penyebaran
                berkelanjutan. Virus yang menyebabkan COVID-19 tampaknya
                menyebar dengan mudah dan berkelanjutan di komunitas
                (“penyebaran komunitas”) di beberapa wilayah geografis yang
                terkena dampak. Penyebaran komunitas berarti orang telah
                terinfeksi virus di suatu daerah, termasuk beberapa yang tidak
                yakin bagaimana atau di mana mereka terinfeksi.
              </Text>
            </Box>
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
            Sumber : <Link href="https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html">
              <LinkChakra>
                <a>CDC Gov</a>
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

export default Penyebaran;
