import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Clients from "./../Clients";
import "./styles.scss";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "Republika",
              image: "https://msopyan.web.id/images/logo_7.png",
              width: "135px"
            },
            {
              name: "Liputan6",
              image: "https://msopyan.web.id/images/logo_8.png",
              width: "135px"
            },
            {
              name: "DailySocial",
              image: "https://msopyan.web.id/images/logo_9.png",
              width: "135px"
            },
            {
              name: "Tempo",
              image: "https://msopyan.web.id/images/logo_10.png",
              width: "135px"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
