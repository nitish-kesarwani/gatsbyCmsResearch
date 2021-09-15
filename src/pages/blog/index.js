import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

const BlogIndex = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node 
                    {
                        fields
                        {
                            slug
                        }
                        frontmatter 
                        {
                            date(formatString: "MMMM DD, YYYY")
                            description
                            title
                            thumbnail
                        }
                        excerpt(pruneLength:120)
                    }
                }
            }
        }
    `)
    const { edges: posts } = data.allMarkdownRemark
    console.log('data', posts);
    return (
        <Layout>
            <section className='gradient-background' style={{
                padding:'65px 0'
            }}>
                <h1 className='container' style={{marginBottom:'60px'}}>Latest Blogs</h1>
                <div className='container' style={{display:'flex'}}>
                {
                    posts && posts.map(({ node: post }, index) => (
                        <div key={index} style={{padding:20,backgroundColor:'white',width:400,borderRadius:4, color:'#4a4a4a',boxShadow:'box-shadow: 0 0.5em 1em -0.125em rgb(43 37 35 / 10%), 0 0 0 1px rgb(43 37 35 / 2%)'}}>
                            <div style={{textDecoration:'underline', fontSize:25}}>
                                {post?.frontmatter?.title}
                            </div>
                            <div style={{color:'grey', fontStyle:'italic', fontSize:14, margin:'12px 0'}}>{post?.frontmatter?.date}</div>
                            <p>
                                {post.excerpt}
                                <br />
                                <br />
                                <Link style={{display:'flex', flexDirection:'row-reverse'}} className="button" to={post.fields.slug}>
                                    Read More →
                                </Link>
                            </p>
                        </div>
                    ))
                }
                </div>
            </section>
        </Layout>
    )
}

export default BlogIndex