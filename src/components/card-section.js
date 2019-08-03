import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';
import Card from '../components/card';

const CardSection = () => {
  const { cardOneImage, cardTwoImage, cardThreeImage } = useStaticQuery(
    graphql`
      query {
        cardOneImage: file(relativePath: { eq: "waves-access-point.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <section
      css={css`
        background: #f0f4f8;
        padding: 2rem 4rem;
        min-height: 40vh;

        @media only screen and (max-width: 1000px) {
          margin: 0 auto;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, minmax(400px, 1fr));
          grid-column-gap: 2rem;
          margin: 0 auto;

          @media only screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        <Card
          fluid={cardOneImage.childImageSharp.fluid}
          title={'Internet Access is a Human Right'}
          copy={
            'Waves not only stands for Net Neutrality, but is committed to making all members of the network aware of any potential changes.'
          }
        />
        <Card
          fluid={cardOneImage.childImageSharp.fluid}
          title={'Get the Facts'}
          copy={`Comcast is available throughout Baltimore, however their pricing makes them inaccessible to many families. Per the Deutsch Foundation's Digital Access and Equity Report for Baltimore City 2017 report, 75,000 homes lack internet access.`}
          featured
        />
        <Card
          fluid={cardOneImage.childImageSharp.fluid}
          title={'Availability ≠ Accessibility'}
          copy={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ut ut curabitur cursus massa gravida praesent nunc.'
          }
        />
      </div>
    </section>
  );
};

export default CardSection;
