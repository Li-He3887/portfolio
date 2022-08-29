import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Skill() {
	return (
		<>
			<Head>
			  <title>Skill</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Skill</h1>
			      <p className="description">
			      	What kind of skill I have?
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/programming-language.avif" className="portfolio-image" />

			      		<h4 className="portfolio-name">Languages that I know</h4>
			      		<div className="portfolio-category">Python</div>
						<div className="portfolio-category">JavaScript</div>
						<div className="portfolio-category">Java & Kotlin</div>
						<div className="portfolio-category">HTML</div>
						<div className="portfolio-category">CSS</div>
						<div className="portfolio-category">PHP</div>

			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/library.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Library</h4>
			      		<div className="portfolio-category">Bootstrap</div>
						<div className="portfolio-category">Material-Ui</div>
						<div className="portfolio-category">Laravel</div>
			      	</div>
					  <div className="portfolio-item">
			      		<img src="/framework.jpg" className="portfolio-image" />

			      		<h4 className="portfolio-name">Framework</h4>
			      		<div className="portfolio-category">React</div>
						<div className="portfolio-category">Next Js</div>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Skill;