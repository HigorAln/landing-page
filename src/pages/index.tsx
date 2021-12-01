import { Flex } from "@chakra-ui/layout";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { Formulario } from "../components/Formulario";
import { HomePage1 } from "../components/HomePage1";
import { HomePage2 } from "../components/HomePage2";
import { HomePage3 } from "../components/HomePage3";
import { Pricing } from "../components/Princing";
import { Social } from '../components/Social/index';

export default function Home() {
  return (
    <>
    <Flex flexDir="column" px="4.5rem">
      <HomePage1 />
      <Brands />
      <HomePage2 />
      <HomePage3 />
      <Pricing />
      <Social />
      <Formulario />
    </Flex>
      <Footer />
    </>
  )
}
