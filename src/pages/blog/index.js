import React from "react";
import HeroSection from "./../../components/HeroSection";
import ContentSection from "./../../components/ContentSection";
import CtaSection from "./../../components/CtaSection";
import BlogSection from "./../../components/BlogSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function BlogPage(props) {
  const router = useRouter();
	return (
    <BlogSection color="white" size="medium" title="Blog" subtitle="" />
  );
}

export default BlogPage;