import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Blog from "./../Blog";
import "./styles.scss";

function BlogSection(props) {
  return (
    <Section color={props.color} size={props.size} id="blog">
      <div className="BlogSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Blog
          buttonText="Read more"
          onChoosePlan={planId => {
            // Read your own article here
            alert(`You read this article`);
          }}
          items={[
            {
              title: "Paralegal Case 1",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam.",
              image: "https://msopyan.web.id/images/case-1.jpg"
            },
            {
              title: "Paralegal Case 2",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
              image: "https://msopyan.web.id/images/case-2.jpg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default BlogSection;
