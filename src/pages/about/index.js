import React from "react";
import ContentSection from "./../../components/ContentSection";
import StatsSection from "./../../components/StatsSection";
import TeamBiosSection from "./../../components/TeamBiosSection";
import CtaSectionJobs from "./../../components/CtaSectionJobs";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection
        color="light"
        size="medium"
        title="Meet the Team"
        subtitle=""
      />
      <CtaSectionJobs
        color="primary"
        size="reguler"
        title="Join our team of engineers, designeer, and many others"
        subtitle=""
        buttonText="Discover Jobs"
        buttonOnClick={() => {
          router.push("/jobs");
        }}
      />
    </>
  );
}

export default AboutPage;
