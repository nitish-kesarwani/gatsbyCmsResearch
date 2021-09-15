import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
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
                <div className='container'>
                {
                    posts && posts.map(({ node: post }, index) => (
                        <div key={index} 
                            style={{
                                backgroundColor:'white',
                                width:350,
                                borderRadius:4, 
                                color:'#4a4a4a',
                                boxShadow:'box-shadow: 0 0.5em 1em -0.125em rgb(43 37 35 / 10%), 0 0 0 1px rgb(43 37 35 / 2%)',
                                margin:'0 30px 30px 0',
                                display:'inline-block'
                            }}
                        >
                            <div style={{width:350,height:150}}>
                                <img
                                    style={{
                                        width:'100%',
                                        height:'100%',
                                        margin:0,
                                        // objectFit:'cover'
                                    }}
                                    src={post?.frontmatter?.thumbnail}
                                    alt="MediaValet logo"
                                />
                            </div>
                            <div style={{padding:20}}>
                                <div style={{textDecoration:'underline', fontSize:22}}>
                                    {post?.frontmatter?.title}
                                </div>
                                <div style={{color:'grey', fontStyle:'italic', fontSize:13, margin:'12px 0'}}>{post?.frontmatter?.date}</div>
                                <div style={{fontSize:17, fontWeight:100}}>
                                    {post.excerpt}
                                    <br />
                                    <br />
                                    <Link to={post?.fields?.slug} style={{display:'flex', flexDirection:'row-reverse'}} className="button" to={post.fields.slug}>
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        </Layout>
    )
}

export default BlogIndex