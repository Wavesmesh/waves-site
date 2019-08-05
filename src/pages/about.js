import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';

import Layout from '../components/layout';
import {
  AppWrapper,
  ContentWrapper,
} from '../components/elements/layout-components';
import Header from '../components/header';
import InfoFooter from '../components/info-footer';
import Footer from '../components/footer';
import JoinNetworkForm from '../components/join-network-form';

const AboutPage = () => {
  const { aboutImageFeatured } = useStaticQuery(graphql`
    query {
      aboutImageFeatured: file(relativePath: { eq: "roof-access-point.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Layout>
        <AppWrapper>
          <Header />
          <Img
            fluid={aboutImageFeatured.childImageSharp.fluid}
            css={css`
              border-radius: 16px 16px 0 0;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
              width: 100%;
              height: 100%;
              max-height: 800px;
              object-position: 50% 10%;
            `}
          />
          <main
            css={css`
              max-width: 60%;
              margin: 20vh auto;

              h2 {
                color: #000;
                font-size: 4rem;
              }
              p {
                color: #000;
                font-size: 2rem;
                line-height: 3rem;
              }
            `}
          >
            <h2>From the Waves Team</h2>
            <p>
              My name is Adam Bouhmad, and I founded Waves in response to the
              repeal of Net Neutrality back in 2018. Recently, the UN declared
              that Internet access is a human right -- Internet access is
              paramount to succeed in today’s society.
            </p>
            <p>
              Susan Crawford has written and spoken extensively how the US has
              fallen far behind the rest of the industrialized nations in terms
              of public access to Broadband Internet because of the monopolistic
              practices of companies like Comcast, Time Warner, AT&T, and
              Verizon.
            </p>
            <blockquote
              css={css`
                font-size: 2rem;
                line-height: 3rem;
                font-weight: 300;
                padding-left: 1rem;
                border-left: 2px solid var(--secondary-color);
              `}
            >
              “The rich are getting gouged, the poor are very often left out,
              and this means that we’re creating, yet again, two Americas, and
              deepening inequality through this communications inequality,” -
              Susan Crawford
            </blockquote>
            <p>
              Providing a service is one thing. Comcast claims they’re available
              throughout the city, and to be fair, they are. Thanks to the 2016
              Comcast Franchise Agreement with Baltimore City, Comcast is
              available throughout the city. However, there is a big difference
              between availability and accessibility -- availability does not
              equal accessibility in terms of pricing and quality of service.
              Waves is a response to this; the lack of equitable internet
              choices in Baltimore paired with the unruly price gouging these
              providers engage in.
            </p>
            <p>
              When folks talk about 21st-century skills, the fascinating thing
              is that we’re already 20% of the way into the 21st century. We’ve
              talked about the problem for decades, but let's start focusing on
              solutions. Together, we can build out community wireless across
              Baltimore where the main focus isn’t profitability -- but rather
              the human aspect.
            </p>
          </main>
          <InfoFooter />
          <Footer />
        </AppWrapper>
      </Layout>
    </React.Fragment>
  );
};

export default AboutPage;
