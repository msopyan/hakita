import React from "react";
import HeroSection from "./../../components/HeroSection";
import ContentSection from "./../../components/ContentSection";
import FeaturesSection from "./../../components/FeaturesSection";
import ClientsSection from "./../../components/ClientsSection";
import TestimonialsSection from "./../../components/TestimonialsSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="Urusan legal jadi lebih Gampang"
        subtitle="Dapatkan kemudahannya dalam genggaman Anda. Caritau bagaimana caranya"
        buttonText="Get Legal"
        buttonOnClick={() => {
          router.push("/contact");
        }}
      />
      <ContentSection
        color="white"
        size="large"
        title="We help you legalize"
        subtitle="Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda."
      />
      <FeaturesSection
        color="light"
        size="medium"
        title="Product and Services"
        subtitle="Apapun kebutuhan legal Anda, biar HAKITA yang urus."
      />
      <ClientsSection
        color="white"
        size="medium"
        title="Reported By"
        subtitle=""
      />
      <TestimonialsSection
        color="light"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/service");
        }}
      />
    </>
  );
}

export default HomePage;
