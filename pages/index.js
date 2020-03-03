import Head from 'next/head'
import Layout from '../components/Layout'
import AboutCorona from '../components/Home/AboutCorona'
import {Heading, Flex} from '@chakra-ui/core'
import Status from '../components/Status'

const Home = () => (
  <>
    <Head>
      <title>Corona Data Center</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Flex
      justifyContent="center"
      >
      <Status/>
      </Flex>
      <Heading as="h2" size="md" paddingBottom="2rem"> Informasi Dasar Corona Virus</Heading>
      
      <AboutCorona/>
    </Layout>

  </>
)

export default Home
