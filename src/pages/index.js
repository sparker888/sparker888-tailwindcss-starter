import tw from "twin.macro";
import React from "react";
import Seo from "../components/Seo";
import Layout from "../layouts/Layout";
import Intro from "../components/Intro";
import ScrollButton from "../components/scrollUp";
import Sparker from "../components/Sparker"
import Featured from "../components/Featured";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <ScrollButton />
      <Seo />
      <Intro />
      <Sparker />
      <FeaturedHeroesWrapper>
        {data.heroes && data.heroes.nodes.length > 0 ? (
          <Featured items={data.heroes.nodes} />
        ) : (
          <div>No Projects found.</div>
        )}
      </FeaturedHeroesWrapper>
    </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    heroes: allContentfulHeroes(sort: { order: ASC }) {
      nodes {
        ...HeroSections
      }
    }
  }
`

const FeaturedHeroesWrapper = tw.div`
w-full
`