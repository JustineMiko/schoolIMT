import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStyles } from 'react-styles-hook';
import getStyles from './blogPostStyles';

const BlogPost = ({data}) => { 
  const classes = useStyles(getStyles());

  return (
    <div style={classes.blogContainer}>
      <h1 style={classes.title}>{data.contentfulBlogPost.title}</h1>
        <GatsbyImage style={classes.img} image={data.contentfulBlogPost.image.gatsbyImageData} alt={data.contentfulBlogPost.image.description}/>
        <p>{data.contentfulBlogPost.description.description}</p>
    </div> 
  )
}

export default BlogPost 

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
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