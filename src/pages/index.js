import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStyles } from 'react-styles-hook';
import getStyles from '../pageStyles/indexStyles';

const IndexPage = ({ data }) => {

  const classes = useStyles(getStyles());

  return (
    <div>
      <div style={classes.container}>
        <h2 style={classes.title}>{data.contentfulHomePage.title}</h2>
        <p style={classes.introduction}>{data.contentfulHomePage.description.description}</p>
        <div style={classes.imageContainer}>
          <GatsbyImage style={classes.img} image={data.contentfulHomePage.image.gatsbyImageData} alt={data.contentfulHomePage.image.description}/>
        </div>
      </div>
      <footer style={classes.footer}>
        {data.site.siteMetadata.title}
      </footer>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    contentfulHomePage {
      title
      description {
        description
      }
      image {
        description
        gatsbyImageData(placeholder: BLURRED, width: 400)

      }
    }
  }
`
