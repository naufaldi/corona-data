import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/core";
import Card from '../Card'
function AboutCorona() {
  return (
    <Flex align="flex-start" justifyContent="space-around">
      <Card
        img={'https://images.unsplash.com/photo-1579781403337-de692320718a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=940&q=80'}
        altImg={'Penyebaran'}
        href={'/info-dasar/penyebaran'}
        heading={'Cara Penyebaran COVID-19'}
        text={' Pemahaman saat ini tentang bagaimana virus yang menyebabkan penyakit coronavirus 2019 (COVID-19) menyebar sebagian besar didasarkan pada apa yang diketahui tentang coronavirus yang serupa'}
      />
      <Card
       img={'https://images.unsplash.com/photo-1529386317747-0a2a51add902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
       altImg={'Gejala'}
        href={'/info-dasar/gejala'}
        heading={'Gejala COVID-19'}
        text={' Penyakit yang dilaporkan telah berkisar dari gejala ringan hingga penyakit parah dan kematian untuk kasus penyakit coronavirus 2019 (COVID-19).'}
      />
      <Card
       img={'https://images.unsplash.com/photo-1580377968131-bac075a9a3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
       altImg={'Pencegahan'}
        href={'/info-dasar/pencegahan'}
        heading={'Pencegahan COVID-19'}
        text={' Hingga saat ini, belum ada vaksin untuk mencegah penularan nCoV. Cara terbaik untuk mencegah penyakit adalah menghindari terkena virus ini.'}
      />
    </Flex>
  );
}

export default AboutCorona;
