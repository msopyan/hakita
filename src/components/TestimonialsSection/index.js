import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Testimonials from "./../Testimonials";
import "./styles.scss";

function TestimonialsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Testimonials
          items={[
            {
              avatar: "https://msopyan.web.id/images/person_1.jpg",
              name: "Sarah Ell",
              quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
              company: "Karyawan Swasta"
            },
            {
              avatar: "https://msopyan.web.id/images/person_1.jpg",
              name: "Sarah Ell",
              quote:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",
              company: "Karyawan Swasta"
            },
            {
              avatar: "https://msopyan.web.id/images/person_1.jpg",
              name: "Sarah Ell",
              quote:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
              company: "Karyawan Swasta"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TestimonialsSection;
