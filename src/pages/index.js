import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  	<Layout>
    	<Seo title="Home" />
		<section className='container' style={{
			background: 'transparent url(https://mediavalet-corp.azureedge.net/wp-content/uploads/2019/01/MV-Homepage-Artificial-Intelligence-Hero-header-Jan2019.png) no-repeat center center',
			backgroundSize: 'contain',
			padding:'110px 0',
			backgroundPosition:'25vw bottom'
		}}
    >
      	<div style={{width:'50%'}}>
			<h1 style={{color:'#2483c5', fontSize:'3.1rem', fontFamily:'Roboto,sans-serif', fontWeight:300, lineHeight:1.2}}>
				Enterprise Digital Asset
				Management in the Cloud
			</h1>
			<h3 style={{fontSize:'2.1rem', fontWeight:300, margin:'2rem 0'}}>
				Discover the 
				<em style={{color:'#98c43e', padding:'0 10px', fontFamily:'house-script,Times New Roman,Times,serif'}}>power</em>
				of your assets
			</h3>
        	<span className='accessBtn' style={{marginLeft:0, fontSize:'1.3rem', padding:'8px 13px'}}>Get Free Demo</span>
      	</div>
      	<div style={{width:'50%'}}></div>
    </section>
	<section className='container' style={{
			display:'flex',
			justifyContent:'space-between',
			alignItems:'center',
			padding:'65px 0'
		}}
	>
			<StaticImage
				src={`../images/1.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/2.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/3.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/4.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/5.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/6.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/7.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/8.png`}
				width={105}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
	</section>
	<section className='gradient-background' style={{
		padding:'65px 0'
	}}>
		<div className='container' style={{
			display:'flex',
			justifyContent:'space-between',
			alignItems:'center'
		}}>
			<StaticImage
				src={`../images/title1.jpg`}
				width={348}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/title2.jpg`}
				width={348}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
			<StaticImage
				src={`../images/title3.jpg`}
				width={348}
				quality={100}
				formats={["auto", "webp", "avif"]}
			/>
		</div>
	</section>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
