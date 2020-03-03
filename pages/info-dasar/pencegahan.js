import React from "react";
import Head from "next/head";
import AppLayout from "../../components/Layout";
import { Box, Heading, Text, Flex, List, ListItem, Link as LinkChakra } from "@chakra-ui/core";
import Link from "next/link";

const Pencegahan = () => {
  return (
    <>
      <Head>
        <title>Pencegahan COVID-19</title>
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
              Pencegahan Penyebaran COVID-19
            </Heading>
            <Text>
            Hingga saat ini, belum ada vaksin untuk mencegah penularan nCoV. Salah satu cara yang bisa dilakukan untuk mencegah tertularnya virus ini adalah:
            </Text>
            <Box>
            <List styleType="disc">
                <ListItem>
                Menjaga kesehatan dan kebugaran agar sistem imunitas/ kekebalan tubuh meningkat.
                </ListItem>
                <ListItem>
                Mencuci tangan menggunakan air dan sabun atau hand-rub berbasis alkohol. Mencuci tangan sampai bersih selain dapat membunuh virus yang mungkin ada di tangan kita, tindakan ini juga merupakan salah satu tindakan yang mudah dan murah. Sekitar 98% penyebaran penyakit bersumber dari tangan. Karena itu, menjaga kebersihan tangan adalah hal yang sangat penting.
                </ListItem>
                <ListItem>
                Ketika batuk dan bersin, upayakan menjaga agar lingkungan Anda tidak tertular. Tutup hidung dan mulut Anda dengan tisu atau dengan lengan (bukan dengan telapak tangan).
                </ListItem>
                <ListItem>
                Menjaga jarak saat berbicara dengan orang lain, sekurang-kurangnya satu meter, terutama dengan orang yang sedang menderita batuk, pilek/bersin dan demam. Saat seseorang terinfeksi penyakit saluran pernafasan, seperti 2019-nCoV, batuk/bersin dapat menghasilkan droplet yang mengandung virus. Jika kita terlalu dekat, virus tersebut dapat terhirup oleh kita.
                </ListItem>
                <ListItem>
                Hindari menyentuh mata, hidung dan mulut. Tangan menyentuh banyak hal yang dapat terkontaminasi virus. Jika kita menyentuh mata, hidung dan mulut dengan tangan yang terkontaminasi, maka virus dapat dengan mudah masuk ke tubuh kita.
                </ListItem>
                <ListItem>Gunakan masker penutup mulut dan hidung ketika Anda sakit atau saat berada di tempat umum.</ListItem>
                <ListItem>Buang tisu dan masker yang sudah digunakan ke tempat sampah, lalu cucilah tangan Anda.</ListItem>
                <ListItem>Hindari kontak dengan hewan ternak dan hewan liar yang terbukti tertular coronavirus.</ListItem>
                <ListItem>Jangan makan daging yang tidak dimasak hingga matang.</ListItem>
                <ListItem>Menunda perjalanan ke daerah/ negara dimana virus ini ditemukan seperti Cina, seiring dengan informasi adanya penghentian sementara operasional penerbangan langsung dari dan ke daratan Cina dari pemerintah, sampai ada informasi lebih lanjut. </ListItem>
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

export default Pencegahan;
